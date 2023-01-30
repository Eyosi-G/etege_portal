import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { useNavigate } from 'react-router-dom'
import { IProduct, useCreateProductMutation, useDeleteProductMutation } from '../../service/api/productService'
import Chip from '../Chip'
import DeleteButton from '../DeleteButton'
import EditButton from '../EditButton'
import 'react-quill/dist/quill.bubble.css';
import { baseUrl, imageBaseUrl } from '../../service/common'
import Modal from '../Modal'
import Confirmation from '../Confirmation'
import GrayBg from '../GrayBg'
import SuccessDialog from '../SuccessDialog'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../../hooks/redux-hook'

interface IProps {
    product: IProduct
}
const ProductTableRow = (props: IProps) => {
    const { product } = props;
    const navigate = useNavigate()
    const [openConfirmation, setConfirmation] = useState(false)
    const [_, { reset }] = useCreateProductMutation()
    const { data: userData } = useAppSelector(state => state.user)
    const [handleDeleteProduct] = useDeleteProductMutation({
        fixedCacheKey: "delete-product"
    })
    return (
        <div className='grid grid-cols-10 mt-5 gap-3 items-center '>
            <Modal open={openConfirmation} backdrop={<GrayBg />}>
                <Confirmation handleCancel={() => { setConfirmation(false) }} handleDelete={() => {
                    if (!userData) return;
                    handleDeleteProduct({ id: product.id, token: userData.token })
                    setConfirmation(false)
                }} />
            </Modal>
            <div className=''>
                <img className='overflow-hidden w-full h-28 block object-cover object-top rounded-lg ' src={`${imageBaseUrl}${product.images[0]}`} />
            </div>
            <div className='capitalize col-span-2 text-center'>{product.name.toLowerCase()}</div>
            <div className='col-span-2 flex justify-center h-fit space-x-2 items-center'>
                {product.categories.map(category => <Chip label={category.name} />)}
            </div>
            <div className='text-sm col-span-2 text-center'>{product.compareAtPrice !== undefined ? product.compareAtPrice + " ETB" : "---"} </div>
            <div className='text-sm text-center'>{product.price + " ETB"} </div>
            <div className='col-span-2 flex justify-center  space-x-2 h-fit text-xs text-gray-700 font-semibold'>
                <button onClick={() => navigate(`/products/${product.slug}/edit`)} className='px-3 py-1 rounded-lg bg-gray-300 capitalize'>edit</button>
                <button onClick={() => {
                    console.log("delete clicked")
                    reset()
                    setConfirmation(true)
                }} className='px-3 py-1 rounded-lg bg-gray-300 capitalize'>delete</button>
            </div>
        </div>
    )
}

export default ProductTableRow