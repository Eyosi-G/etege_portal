import React from 'react'
import Paginator from '../Paginator'
import ProductTableRow from './ProductTableRow'

const ProductsTable = () => {
    return (
        <div className='w-full mt-3 border border-gray-300 rounded-lg p-4'>
            <div className='grid grid-cols-12 uppercase text-sm text-gray-500 gap-2  border-b border-b-gray-300 p-3'>
                <div className='col-span-4'>Product Details</div>
                <div className='col-span-2'>Category</div>
                <div className=''>Price</div>
                <div className=''>Stock</div>
                <div className='col-span-2 '>SKU</div>
                <div className='col-span-2'>Actions</div>
            </div>
            <div className=''>
                <ProductTableRow />
                <ProductTableRow />
                <ProductTableRow />
            </div>
        </div>

    )
}

export default ProductsTable