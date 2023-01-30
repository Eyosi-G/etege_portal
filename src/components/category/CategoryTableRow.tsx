import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook'
import { ICategory, useDeleteCategoryMutation } from '../../service/api/categoryService'
import { setCategory } from '../../service/slices/categorySlice'
import Confirmation from '../Confirmation'
import DeleteButton from '../DeleteButton'
import EditButton from '../EditButton'
import GrayBg from '../GrayBg'
import Modal from '../Modal'

interface IProps {
    category: ICategory
}
const CategoryTableRow = (props: IProps) => {
    const dispatch = useAppDispatch()
    const [handleDelete] = useDeleteCategoryMutation()
    const { data: userData } = useAppSelector(state => state.user)
    const { name, id } = props.category
    const [openConfirmation, setConfirmation] = useState(false)

    return (
        <div className='grid grid-cols-2 mt-5 gap-2 '>
            <Modal open={openConfirmation} backdrop={<GrayBg />}>
                <Confirmation handleCancel={() => { setConfirmation(false) }} handleDelete={() => {
                    if (!userData) return;
                    handleDelete({ id, token: userData.token })
                    setConfirmation(false)

                }} />
            </Modal>
            <div className=''>{name}</div>
            <div className='flex  space-x-2 h-fit text-xs text-gray-700 font-semibold'>
                <button onClick={() => dispatch(setCategory(props.category))} className='px-3 py-1 rounded-lg bg-gray-200 capitalize'>edit</button>
                <button onClick={() => {
                    setConfirmation(true)
                }} className='px-3 py-1 rounded-lg bg-gray-200 capitalize'>delete</button>
            </div>
        </div>
    )
}

export default CategoryTableRow