import React from 'react'
import CategoryTableRow from './CategoryTableRow'

const CategoryTable = () => {
    return (
        <div className='w-full mt-5 border border-gray-300 rounded-lg p-4'>
            <div className='grid grid-cols-2 uppercase text-sm text-gray-500 gap-2 border-b pb-3 border-b-gray-300'>
                <div className=''>Name</div>
                <div className=''>Actions</div>
            </div>
            <div>
                <CategoryTableRow name='Shifon' />
                <CategoryTableRow name='Menen' />
                <CategoryTableRow name='Fetil' />
                <CategoryTableRow name='Saba' />
            </div>
        </div>
    )
}

export default CategoryTable