import React from 'react'
import SupplierTableRow from './SupplierTableRow'

const SuppliersTable = () => {
    return (
        <div className='mt-3 border border-gray-300 rounded-lg p-4'>
            <div className='grid grid-cols-7 uppercase text-sm text-gray-500  border-b border-b-gray-300 p-2 '>
                <div>Company</div>
                <div>Contact Name</div>
                <div>Email</div>
                <div>Phone</div>
                <div>Address</div>
                <div>Status</div>
                <div>Actions</div>
            </div>
            <div>
               <SupplierTableRow />
               <SupplierTableRow />
               <SupplierTableRow />
            </div>
        </div>
    )
}

export default SuppliersTable