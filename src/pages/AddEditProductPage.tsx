import React, { useState } from 'react'
import Chip from '../components/Chip'
import InputField from '../components/InputField'
import Layout from '../components/Layout'
import MultiLineInputField from '../components/MultiLineInputField'
import ImageContainer from '../components/products/ImageContainer'

const AddEditProductPage = () => {

    return (
        <Layout>
            <div>
                <div className='flex items-center space-x-4'>
                    <button className='border p-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                    </button>
                    <div>
                        <div className='text-sm text-gray-600'>Back to product list</div>
                        <div className='font-bold text-xl'>Add New Product</div>
                    </div>
                </div>
                <div className='flex mt-5 gap-2'>
                    <div>
                        <div>
                            <div className="text-lg mb-2">Description</div>
                            <div className='space-y-2 '>
                                <InputField title='Product Name' isRequired={true} />
                                <MultiLineInputField title='Product Description' isRequired={true} />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className="text-lg mb-2">Category</div>
                            <div>
                                <p className='flex space-x-2 text-sm mb-2'>
                                    <span>Category</span>
                                    <span className='text-red-500 '>*</span>
                                </p>
                                <div className=''>
                                    <div className='pr-3 bg-white border '>
                                        <select className='w-full bg-transparent p-3 outline-none'>
                                            <option>Shifon</option>
                                            <option>Tilf</option>
                                            <option>Wolayita</option>
                                        </select>
                                    </div>
                                    <div className='flex justify-end text-sm my-2'>
                                        <button className='px-3 py-2 rounded-lg bg-black text-white  '>Add Category</button>
                                    </div>
                                    <div className='flex space-x-2 items-center text-sm'>
                                        <Chip label="Shifon" onDelete={() => { }} />
                                        <Chip label="Tilf" onDelete={() => { }} />
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div>
                        <div>
                            <div className="text-lg mb-2">Product Images</div>
                            <div className=' flex space-x-2'>
                                <div className='w-28 h-28 border border-gray-500 border-dashed rounded-lg bg-gray-50 flex items-center justify-center'>
                                    <div className='flex flex-col items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                        <div className='text-xs'>Click to upload</div>
                                    </div>
                                </div>
                                <ImageContainer />
                                <ImageContainer />
                                <ImageContainer />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className="text-lg mb-2">Inventory</div>
                            <div className='flex space-x-2'>
                                <InputField title='Quantity' />
                                <InputField title='SKU' />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className="text-lg mb-2">Pricing</div>
                            <div className='space-y-2'>
                                <div>
                                    <p className='flex space-x-2 text-sm '>
                                        <span>Price</span>
                                        <span className='text-red-500 '>*</span>
                                    </p>
                                    <div className='flex items-center mt-2'>
                                        <div className='p-3 border-y border-l border-r-0 border-gray-300  bg-gray-100'>ETB</div>
                                        <input className=' w-full p-3 border border-gray-300 ' />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end items-center space-x-5 h-fit my-2'>
                            <button className='px-3 py-2 rounded-lg border border-gray-300 '>Discard</button>
                            <button className='px-3 py-2 rounded-lg bg-black text-white  '>Add Product</button>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddEditProductPage