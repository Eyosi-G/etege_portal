import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IOrder, useDeleteOrderMutation } from '../../service/api/orderService'
import OrderStatus from './OrderStatus'
import moment from "moment"
import Modal from '../Modal'
import GrayBg from '../GrayBg'
import Confirmation from '../Confirmation'
import { useAppSelector } from '../../hooks/redux-hook'

interface IProps {
    order: IOrder
}
const OrderTableRaw = (props: IProps) => {
    const { order } = props
    const navigate = useNavigate()
    const orderAt = moment(order.orderDate).format("MMM DD, YYYY")
    const [openConfirmation, setConfirmation] = useState(false)

    const { data: userData } = useAppSelector(state => state.user)
    const [handleDeleteOrder] = useDeleteOrderMutation()
    return (
        <div>
            <Modal open={openConfirmation} backdrop={<GrayBg />}>
                <Confirmation handleCancel={() => { setConfirmation(false) }} handleDelete={() => {
                    if (!userData) return;
                    handleDeleteOrder({ id: order.id, token: userData.token })
                    setConfirmation(false)

                }} />
            </Modal>
            <div className='grid-cols-5 grid mt-5 gap-2 hover:cursor-pointer' onClick={() => { navigate(`/orders/details/${order.slug}`) }}>

                <div>{`${order.total.toFixed(2)} ETB`}</div>
                <div className='flex items-center space-x-2'>
                    <div className='min-w-fit'>{orderAt}</div>
                    {order.isNew && <div className='flex text-xs'>
                        <div className='bg-blue-700 rounded-lg px-2 py-1 text-white'>New</div>
                    </div>}
                </div>
                <div className='col-span-2'>{order.assignedTo ? order.assignedTo.email : "--"}</div>
                <div className='flex  space-x-2 h-fit text-xs text-gray-700 font-semibold'>
                    {userData && ["ADMIN"].includes(userData.role) && <button onClick={(e) => {
                        e.stopPropagation()
                        setConfirmation(true)
                    }} className='px-3 py-1 rounded-lg bg-gray-300 capitalize'>delete</button>}
                </div>
            </div>
        </div>

    )
}

export default OrderTableRaw