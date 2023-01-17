import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import Paginator from '../components/Paginator'
import ProductsTable from '../components/products/ProductsTable'
import SuccessDialog from '../components/SuccessDialog'
import { useDeleteProductMutation, useFetchProductsQuery } from '../service/api/productService'

const ProductsPage = () => {
    const [page, setPage] = useState(0)
    const limit = 5;

    const navigate = useNavigate()
    const { data, isSuccess } = useFetchProductsQuery()
    const [_, { isSuccess: isProductDeleteSuccess }] = useDeleteProductMutation({
        fixedCacheKey: "delete-product"
    })
    return (
        <div className='pb-5'>
            <div className='flex justify-between items-center'>
                <button onClick={() => navigate("/products/new")} className='px-3 py-2 rounded-lg bg-black text-white mt-2 '>+ Add Product</button>
            </div>
            <div className='flex mt-2'>
                <div className='rounded-lg bg-white border px-3 py-1 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input className='ml-4 outline-none p-1 w-full bg-white text-sm' placeholder='Search' />
                </div>
            </div>
            {isProductDeleteSuccess && <SuccessDialog message='Product successflly deleted' />}

            {isSuccess && <ProductsTable products={data.products} />}
            {isSuccess && <div className='flex justify-center'>
                <Paginator updatePage={(newPage) => setPage(newPage)} total={data.total} limit={limit} page={page} />
            </div>}
        </div>
    )
}

export default ProductsPage