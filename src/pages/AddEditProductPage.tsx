import React, { useEffect, useRef, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import Chip from '../components/Chip'
import InputField from '../components/InputField'
import Layout from '../components/Layout'
import MultiLineInputField from '../components/MultiLineInputField'
import ImageContainer from '../components/products/ImageContainer'
import SuccessDialog from '../components/SuccessDialog'
import { ICategory, useGetCategoriesQuery } from '../service/api/categoryService'
import { skipToken } from '@reduxjs/toolkit/query'

import { ICreateProductRequest, IUpdateProductRequest, useCreateProductMutation, useGetProductQuery, useUpdateProductMutation } from '../service/api/productService'
import { useAppSelector } from '../hooks/redux-hook'
interface ICreateProductInputField extends FieldValues {
    description: string,
    price: number,
    compareAtPrice: number
    name: string;
    age?: string
    isSoldOut: boolean;

}
interface IProps {
    isEdit?: boolean;
}
const AddEditProductPage = (props: IProps) => {
    const navigate = useNavigate()
    const { data, isSuccess } = useGetCategoriesQuery(undefined)
    const { data: userData } = useAppSelector(state => state.user)
    const [categories, setCategories] = useState<ICategory[]>([])
    const [category, setCategory] = useState<ICategory>()
    const [isCategoryTouched, setCategoryTouched] = useState(false)
    const [isImagesTouched, setImagesTouched] = useState(false)
    const imageRef = useRef<HTMLInputElement | null>(null);
    const [images, setImages] = useState<(File | string)[]>([])
    const { register, setValue, getValues, watch, formState: { errors }, handleSubmit } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            description: "",
            price: "",
            compareAtPrice: "",
            age: "",
            isSoldOut: false
        }
    })

    const { id } = useParams()
    const { data: product } = useGetProductQuery(id ? id : skipToken)

    useEffect(() => {
        if (product) {
            setValue("name", product.name);
            setValue("description", product.description);
            setValue("price", product.price)
            setValue("age", product.age)
            setValue("isSoldOut", product.isSoldOut);
            setValue("compareAtPrice", product.compareAtPrice);
            setCategories(product.categories)
            setImages(product.images)
        }
    }, [product])

    const removeImage = (index: number) => {
        const _images = [...images]
        _images.splice(index, 1)
        setImages(_images)
    }

    const updateImage = (index: number, image: File) => {
        const _images = [...images]
        _images[index] = image;
        setImages(_images)
    }

    const [createProductHandler, { isSuccess: isCreateProductSuccess }] = useCreateProductMutation()
    const [updateProductHandler, { isSuccess: isUpdateProductSuccess }] = useUpdateProductMutation()

    return (
        <>
            <div className='flex items-center space-x-4'>
                <button onClick={() => navigate(-1)} className='border p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <div>
                    <div className='text-sm text-gray-600'>Back to product list</div>
                    <div className='font-bold text-xl'>{props.isEdit ? "Edit Product" : "Add New Product"}</div>
                </div>
            </div>
            {isCreateProductSuccess && <SuccessDialog message='Product Successfully Added' />}
            {isUpdateProductSuccess && <SuccessDialog message='Product Successfully Updated' />}

            <form onSubmit={handleSubmit((data) => {
                const _data: ICreateProductInputField = data as ICreateProductInputField;
                if (categories.length === 0 || images.length === 0 || !userData) {
                    return
                }
                if (props.isEdit && product) {
                    const notChangedImages: string[] = images.filter(image => typeof image == "string") as string[]
                    const toBeUpdatedImages = product.images.filter(image => !notChangedImages.includes(image))
                    const updateProductRequest: IUpdateProductRequest = {
                        id: product.id,
                        categories: categories.map(category => category.id),
                        description: _data.description,
                        images: images.filter(image => image instanceof File) as File[],
                        price: _data.price,
                        compareAtPrice: _data.compareAtPrice,
                        name: _data.name,
                        age: _data.age ? _data.age.split(",").map(item => item.trim()).join(", ") : _data.age,
                        token: userData.token,
                        toBeUpdatedImages,
                        isSoldOut: _data.isSoldOut
                    }
                    console.log(updateProductRequest)
                    updateProductHandler(updateProductRequest)
                    return
                }
                const createProductRequest: ICreateProductRequest = {
                    name: _data.name,
                    categories: categories.map(category => category.id),
                    description: _data.description,
                    images: images as File[],
                    price: _data.price,
                    age: _data.age,
                    compareAtPrice: _data.compareAtPrice,
                    token: userData.token,
                    isSoldOut: _data.isSoldOut
                }
                createProductHandler(createProductRequest)
            })} className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-2'>
                <div >
                    <div>
                        <div className="text-lg mb-2">Name</div>
                        <InputField
                            isRequired
                            errors={errors}
                            register={register}
                            name='name'
                            title="Product Name"
                            options={{
                                required: "Name is required",
                            }} />
                    </div>
                    <div>
                        <div className="text-lg mt-5">Description</div>
                        <div className='space-y-2 '>
                            <MultiLineInputField
                                options={{
                                    required: "Description is required"
                                }}
                                watch={watch}
                                setValue={setValue}
                                name='description'
                                register={register}
                                errors={errors}
                                title='Product Description'
                                isRequired={true} />
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
                                <div className='flex space-x-2 items-center my-2'>
                                    <div className='pr-3 bg-white border grow '>
                                        <select onBlur={(e) => setCategoryTouched(true)} onChange={(e) => {

                                            const id = parseInt(e.target.value);
                                            if (id === -1) {
                                                setCategory(undefined)
                                                return
                                            };
                                            data?.categories.forEach((category) => {
                                                if (category.id === id) {
                                                    setCategory(category)
                                                }
                                            })
                                        }} className='w-full bg-transparent p-3 outline-none'>
                                            <option value={-1}>Select Category</option>
                                            {isSuccess && data.categories.map((category) => {
                                                return <option className='capitalize' value={category.id}>{category.name}</option>
                                            })}
                                        </select>
                                    </div>
                                    <button type='button' onClick={(e) => {
                                        if (!category) return;
                                        const _category = categories.find((ct) => ct.id === category.id)
                                        if (_category) return;
                                        setCategories([...categories, category])
                                    }} className='px-3 py-2 rounded-lg bg-black text-white text-sm '>+ Add Category</button>
                                </div>

                                {isCategoryTouched && categories.length === 0 && <div className='text-red-500 text-xs capitalize mt-1'>Categories can't be empty</div>}


                                <div className='flex space-x-2 items-center text-sm'>
                                    {categories.map(category => {
                                        return <Chip label={category.name} onDelete={() => {
                                            const _categories = categories.filter(ct => {
                                                return ct.id !== category.id
                                            })
                                            setCategories(_categories)
                                        }} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="text-lg mb-2" >Images</div>
                        <p className='flex space-x-2 text-sm  mb-2s'>
                            <span >Product Images</span>
                            <span className='text-red-500 '>*</span>
                        </p>
                        <div className=' flex space-x-2 mt-2'>
                            <div onClick={(e) => {
                                if (images.length < 3) {
                                    imageRef.current?.click()
                                }
                            }} className='w-28 h-28 border hover:cursor-pointer border-gray-500 border-dashed rounded-lg bg-gray-50 flex items-center justify-center'>
                                <div className='flex flex-col items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <div className='text-xs'>Click to upload</div>
                                </div>
                            </div>

                            <input className='hidden' type="file" ref={imageRef} onChange={(e) => {
                                if (!e.target.files) return
                                const files = Array.from(e.target.files)
                                setImages([...images, ...files])
                                e.target.value = ""


                            }} accept='.jpg,.png,jpeg' />
                            {images.map((image, index) => {
                                return <ImageContainer updateImage={updateImage} index={index} deleteImage={() => removeImage(index)} image={image} />
                            })}
                        </div>
                        {isImagesTouched && images.length === 0 && <div className='text-red-500 text-xs capitalize mt-1'>images are required</div>}

                    </div>

                    <div className='mt-5'>
                        <div className="text-lg mb-2">Pricing</div>
                        <div className=' grid grid-cols-2 gap-2'>
                            <InputField
                                isRequired
                                errors={errors}
                                register={register}
                                name='price'
                                title="Price"
                                options={{
                                    required: "Price is required",
                                    min: 0,
                                    valueAsNumber: true,
                                }} />

                            <InputField
                                errors={errors}
                                register={register}
                                name='compareAtPrice'
                                title="Compare at Price"
                                options={{
                                    min: 0,
                                    valueAsNumber: true,
                                }} />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className="text-lg mb-2">Age</div>
                        <InputField
                            errors={errors}
                            register={register}
                            name='age'
                            title="Age Groups"
                            placeholder='12, 13, 14'
                        />
                    </div>

                    <div className='mt-5'>
                        <div className="text-lg mb-2">Is Sold Out ?</div>
                        <input  type="checkbox"  {...register("isSoldOut")} className={`p-3 border border-gray-300 mt-2 `} />
                    </div>
                    <div className='flex justify-end items-center space-x-5 h-fit my-4'>
                        <button onClick={()=> navigate(-1)} className='px-3 py-2 rounded-lg border border-gray-300 '>Discard</button>
                        <button onClick={() => {
                            setCategoryTouched(true)
                            setImagesTouched(true)
                        }
                        } className='px-3 py-2 rounded-lg bg-black text-white  '>{props.isEdit ? "Edit" : "Add"} Product</button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default AddEditProductPage