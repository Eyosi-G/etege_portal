import React from 'react'

const OrderDetailTableRow = () => {
    return (
        <div className='grid grid-cols-8 items-center mt-5 text-sm gap-2'>
            <div>67328STE</div>
            <div className='col-span-2'>Organic Moisturizer</div>
            <div>x2</div>
            <div>200 ETB</div>
            <div>400 ETB</div>
            <div className='col-span-2'>
                <div className='pr-2 border w-fit'>
                    <select className='p-2 outline-none bg-white'>
                        <option>Proccessing</option>
                        <option>Delivered</option>
                        <option>Canceled</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default OrderDetailTableRow