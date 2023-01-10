import React from 'react'

const CustomerInformation = () => {
    return (
        <div className='border border-gray-300 rounded-lg p-4 mt-5 text-sm space-y-5'>
            <div>
                <div className='text-gray-500'>Name</div>
                <div className='capitalize'>Abebe Kebede</div>
            </div>
            <div>
                <div className='text-gray-500'>Email</div>
                <div className='capitalize'>abebe@gmail.com</div>
            </div>
            <div>
                <div className='text-gray-500'>Phone Number</div>
                <div className='capitalize'>091112678976</div>
            </div>
            <div>
                <div className='text-gray-500'>Shipping Address</div>
                <div className='capitalize'>Addis Ababa, Yeka Sub-City, Ferensay Legasion</div>
            </div>
        </div>
    )
}

export default CustomerInformation