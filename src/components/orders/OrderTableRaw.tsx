import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderStatus from './OrderStatus'

interface IProps {
    isNew?: boolean
}
const OrderTableRaw = (props: IProps) => {
    const navigate = useNavigate()
    return (
        <div className='grid-cols-4 grid mt-5 gap-2 hover:cursor-pointer' onClick={() => { navigate("/orders/details/1") }}>
            <div>ST7280283</div>
            <div>3000 ETB</div>
            <div className='flex items-center space-x-2'>
                <div>Jun 12, 2023</div>
                {props.isNew && <div className='flex text-xs'>
                    <div className='bg-blue-700 rounded-lg px-2 py-1 text-white'>New</div>
                </div>}
            </div>
            <div className='flex  space-x-2 h-fit text-xs text-gray-700 font-semibold'>
                <button className='px-3 py-1 rounded-lg bg-gray-300 capitalize'>delete</button>
            </div>
        </div>
    )
}

export default OrderTableRaw