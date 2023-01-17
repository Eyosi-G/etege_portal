import React from 'react'
import { useNavigate } from 'react-router-dom'
import OrderStatus from '../orders/OrderStatus'

const SupplierTableRow = () => {
    const navigate = useNavigate()
    return (
        <div className='grid grid-cols-7  gap-2 mt-5 text-sm hover:cursor-pointer p-2 rounded-lg'>
            <div className='truncate'>Addis Alem Tibeb</div>
            <div className='capitalize'>Hiwot Girma</div>
            <div>hiwot@gmail.com</div>
            <div>0911139084</div>
            <div className='capitalize'>Addis Ababa, Shiromeda, HN-458</div>
            <div>
                <div className='pr-2 border w-fit'>
                    <select className='p-2 outline-none bg-white'>
                        <option>Active</option>
                        <option>Blocked</option>
                    </select>
                </div>
            </div>
            <div className='flex space-x-1 h-fit text-xs text-gray-700 font-semibold'>
                <button onClick={()=> navigate("/suppliers/1/edit")} className='px-3 py-1 rounded-lg bg-gray-300 capitalize'>edit</button>
                <button className='px-3 py-1 rounded-lg bg-gray-300 capitalize'>delete</button>
            </div>
        </div>
    )
}

export default SupplierTableRow