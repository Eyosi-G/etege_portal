import { skipToken } from '@reduxjs/toolkit/dist/query'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ErrorMessage from '../components/ErrorMessage'
import Layout from '../components/Layout'
import CustomerInformation from '../components/orders/CustomerInformation'
import OrderDetailTable from '../components/orders/OrderDetailTable'
import SuccessDialog from '../components/SuccessDialog'
import { useAppSelector } from '../hooks/redux-hook'
import { useAssignOrderMutation, useFetchSingleOrderQuery, useUpdateOrderStatusMutation } from '../service/api/orderService'
import { useGetSalesPersonQuery } from '../service/api/salesPersonService'

const OrderDetailPage = () => {
    const { id } = useParams()
    const { data } = useFetchSingleOrderQuery(id ? id : skipToken)
    const navigate = useNavigate()
    const { data: salesMen } = useGetSalesPersonQuery({})
    const { data: userData } = useAppSelector(state => state.user)
    const [salesmanId, setSalesmanId] = useState<number>()



    const [_, { isSuccess: isUpdateOrderStatusSuccess, reset: resetUpdateOrderStatus }] = useUpdateOrderStatusMutation({ fixedCacheKey: "update-order-status"})

    useEffect(() => {
        if (data && data.assignedTo) {
            setSalesmanId(data.assignedTo.id)
        }
    }, [data])

    const [assignOrderHandler, { isSuccess, isError }] = useAssignOrderMutation()

    const addSalesPerson = () => {
        if (!userData || salesmanId == -1 || !data || !salesmanId) return;

        assignOrderHandler({
            orderId: data.id,
            salesPersonId: salesmanId,
            token: userData.token
        })
    }
    return (
        <>
            <div className='flex justify-between items-center '>
                <div className='flex items-center space-x-4'>
                    <button onClick={() => navigate(-1)} className='border p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                    </button>
                    <div>
                        <div className='text-sm text-gray-600'>Back to order list</div>
                        <div className='font-bold text-xl'>{data?.slug}</div>
                    </div>
                </div>
            </div>
            {userData && ["ADMIN"].includes(userData.role) && <div className='mt-10'>
                <div className='font-bold text-xl'>Assigned To</div>
                {isSuccess && <SuccessDialog message='Order Successfully Assigned' />}
                {isError && <ErrorMessage message='Failed To Assign Order' />}

                {(!salesmanId ||  salesmanId == -1) && <div className='text-sm'>This order is not assigned to sales person yer</div>}
                <div className='flex mt-2'>
                    <select className="w-full md:w-fit" value={salesmanId} onChange={(e) => setSalesmanId(parseInt(e.target.value))} >
                        <option value={-1}>Select Salesman </option>
                        {salesMen?.salesPersons.map(salesPerson => {
                            if (salesPerson.isAccountActivated) {
                                return <option value={salesPerson.id}>{salesPerson.email}</option>
                            }
                        })}
                    </select>
                    <button onClick={addSalesPerson} className='flex items-center space-x-2 px-3 py-1 bg-black text-white '>
                        Assign
                    </button>
                </div>
            </div>}

            <div className='grid-cols-12 grid gap-2 mt-10 pb-10'>

                <div className='col-span-full md:col-span-8'>
                    <div>
                        <div className='font-bold text-xl'>Order Details</div>
                        {isUpdateOrderStatusSuccess && <div onClick={() => resetUpdateOrderStatus()}><SuccessDialog message='Order Status Successfully Changed' /></div>}
                        {data?.orderDetails && <div className='overflow-auto'><OrderDetailTable orderDetails={data?.orderDetails} /></div>}
                    </div>
                </div>
                <div className='col-span-full  md:col-span-4'>
                    <div className='mt-10 md:mt-0 font-bold text-xl'>Customer Information</div>
                    {data && <CustomerInformation order={data} />}
                </div>
            </div>
        </>
    )
}

export default OrderDetailPage