import React from 'react'
import { useNavigate } from 'react-router-dom'
import Chip from '../Chip'
import DeleteButton from '../DeleteButton'
import EditButton from '../EditButton'

const ProductTableRow = () => {
    const navigate = useNavigate()
    return (
        <div className='grid grid-cols-12 mt-5 gap-2'>
            <div className='col-span-4 flex space-x-3'>
                <div className='w-[40%] h-28'>
                    <img className='h-full w-full object-cover object-top rounded-lg' src="https://cdn.shopify.com/s/files/1/0564/3337/7459/products/YUMIDRESS_1_1280x.jpg?v=1672120192" />
                </div>
                <div className='w-[60%]'>
                    <div className='truncate font-bold capitalize'>Black Menen Tilf</div>
                    <div className=' text-gray-400 text-sm text-justify line-clamp-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium vitae quam et laoreet. Duis in tortor eu justo tincidunt dignissim ac sed nisl.
                    </div>
                </div>
            </div>
            <div className='col-span-2 flex h-fit space-x-2 items-center'>
                <Chip label='Shifon' />
                <Chip label='Tilf' />
            </div>
            <div className='text-sm'>1200 ETB</div>
            <div className='text-sm'>30</div>
            <div className='text-sm col-span-2'>SKLTV4532</div>
            <div className='col-span-2 flex  space-x-2 h-fit text-xs text-gray-700 font-semibold'>
                <button onClick={()=> navigate("/products/1/edit")} className='px-3 py-1 rounded-lg bg-gray-300 capitalize'>edit</button>
                <button className='px-3 py-1 rounded-lg bg-gray-300 capitalize'>delete</button>
            </div>
        </div>
    )
}

export default ProductTableRow