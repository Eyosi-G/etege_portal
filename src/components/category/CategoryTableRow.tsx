import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook'
import { ICategory, useDeleteCategoryMutation } from '../../service/api/categoryService'
import { setCategory } from '../../service/slices/categorySlice'
import DeleteButton from '../DeleteButton'
import EditButton from '../EditButton'

interface IProps {
    category: ICategory
}
const CategoryTableRow = (props: IProps) => {
    const dispatch = useAppDispatch()
    const [handleDelete] = useDeleteCategoryMutation()
    const { name, id } = props.category
    return (
        <div className='grid grid-cols-2 mt-5 gap-2 '>
            <div className=''>{name}</div>
            <div className='flex  space-x-2 h-fit text-xs text-gray-700 font-semibold'>
                <button onClick={()=> dispatch(setCategory(props.category))} className='px-3 py-1 rounded-lg bg-gray-200 capitalize'>edit</button>
                <button onClick={()=> handleDelete(id)} className='px-3 py-1 rounded-lg bg-gray-200 capitalize'>delete</button>
            </div>
        </div>
    )
}

export default CategoryTableRow