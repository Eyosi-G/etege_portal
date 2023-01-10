import React from 'react'
import CategoryTableRow from './CategoryTableRow'

const CategoryTable = () => {
    return (
        <table className='w-full mt-5'>
            <div className='grid grid-cols-2 uppercase text-sm text-gray-500 gap-2'>
                <div className=''>Name</div>
                <div className=''>Actions</div>
            </div>
            <div>
                <CategoryTableRow name='Shifon' />
                <CategoryTableRow name='Menen' />
                <CategoryTableRow name='Fetil' />
                <CategoryTableRow name='Saba' />
            </div>
        </table>
    )
}

export default CategoryTable