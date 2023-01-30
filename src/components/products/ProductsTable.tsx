import React from 'react'
import { IProduct } from '../../service/api/productService'
import Paginator from '../Paginator'
import ProductTableRow from './ProductTableRow'

interface IProps {
    products: IProduct[]
}
const ProductsTable = (props: IProps) => {
    const { products } = props
    return (
        <div className='mt-3 border w-[1000px] md:w-full overflow-auto  border-gray-300 rounded-lg p-4 gap-2'>
            <div className='grid grid-cols-10  uppercase text-sm text-gray-500 gap-3  border-b border-b-gray-300 p-3'>
                <div className=''>Thumbnail</div>
                <div className='col-span-2 text-center'>Product Name</div>
                <div className='col-span-2 text-center'>Category</div>
                <div className='col-span-2 text-center'>Compare at Price</div>
                <div className='text-center'>Price</div>
                <div className='text-center col-span-2'>Actions</div>
            </div>
            <div className=''>
                {products.map(product => {
                    return <ProductTableRow  product={product}/>
                })}

            </div>
        </div>

    )
}

export default ProductsTable