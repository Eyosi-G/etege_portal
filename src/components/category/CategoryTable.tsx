import React from 'react'
import { ICategory } from '../../service/api/categoryService'
import CategoryTableRow from './CategoryTableRow'

interface IProps {
    categories: ICategory[];
}
const CategoryTable = (props: IProps) => {


    return (
        <div className='w-full mt-5 border border-gray-300 rounded-lg p-4'>
            <div className='grid grid-cols-2 uppercase text-sm text-gray-500 gap-2 border-b pb-3 border-b-gray-300'>
                <div className=''>Name</div>
                <div className=''>Actions</div>
            </div>
            <div>
                {props.categories.map(category => {
                    return <CategoryTableRow category={category} />
                })}
            </div>
        </div>
    )
}

export default CategoryTable