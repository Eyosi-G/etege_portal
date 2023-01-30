import { skipToken } from '@reduxjs/toolkit/dist/query'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import NotFoundCollection from '../components/NotFoundCollection'
import OrdersTable from '../components/orders/OrdersTable'
import OrderStat from '../components/orders/OrderStat'
import OrderSummerizeCard from '../components/orders/OrderSummerizeCard'
import Paginator from '../components/Paginator'
import { useAppSelector } from '../hooks/redux-hook'
import { useFetchOrdersQuery, useFetchOrderStatQuery } from '../service/api/orderService'

enum OrderStatus {
    all = "",
    pending = "PENDING",
    processing = "PROCESSING",
    delivered = "DELIVERED",
    canceled = "CANCELED"
}
const OrdersPage = () => {
    const limit = 5;
    const [page, setPage] = useState(0)
    const [status, setStatus] = useState<OrderStatus>(OrderStatus.all)

    const { data: userData } = useAppSelector(state => state.user)
    const { data, isSuccess } = useFetchOrdersQuery(userData ? { page, limit, status, token: userData.token } : skipToken)

    const statusButton = (buttonStatus: OrderStatus, name: string) => {
        return <button onClick={() => setStatus(buttonStatus)} className={`px-2 py-1 capitalize rounded-lg border min-w-fit border-gray-200 ${status === buttonStatus && "bg-gray-200"}`}>{name}</button>
    }


    return (
        <div className='pb-5 mt-5'>
            <OrderStat />
            <div className='mb-3 mt-2 space-x-5 text-sm flex items-center overflow-auto'>
                {statusButton(OrderStatus.all, "All Orders")}
                {statusButton(OrderStatus.pending, "Pending")}
                {statusButton(OrderStatus.processing, "Processing")}
                {statusButton(OrderStatus.delivered, "Delivered")}
                {statusButton(OrderStatus.canceled, "Canceled")}
            </div>
            {isSuccess && data.orders.length === 0 && <NotFoundCollection message='No orders found'/>}
            {isSuccess && data.orders.length > 0 && <OrdersTable orders={data.orders} />}
            {
                isSuccess && data.orders.length > 0 && <div className='flex justify-center'>
                    <Paginator limit={limit} page={page} total={data.total} updatePage={(prev) => setPage(prev)} />
                </div>
            }
        </div>
    )
}

export default OrdersPage