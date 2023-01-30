import { Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import CategoryTable from '../components/category/CategoryTable'
import DeleteButton from '../components/DeleteButton'
import EditButton from '../components/EditButton'
import InputField from '../components/InputField'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Paginator from '../components/Paginator'
import SideBar from '../components/SideBar'
import { useCreateCategoryMutation, useEditCategoryMutation, useGetCategoriesQuery } from '../service/api/categoryService'
import { UseFormRegister, FieldValues, UseControllerProps, Controller, useController, Control, FieldPath } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../hooks/redux-hook'
import { setCategory } from '../service/slices/categorySlice'
import NotFoundCollection from '../components/NotFoundCollection'
import ErrorMessage from '../components/ErrorMessage'
import { IError } from '../service/common'



interface ICategoryInputFieldTypes extends FieldValues {
    name: string;
}

const CategoriesPage = () => {
    const [page, setPage] = useState(0)
    const { data } = useGetCategoriesQuery({ limit: 5, page })
    const { formState: { errors }, handleSubmit, register, reset, setValue } = useForm<FieldValues>({
        defaultValues: {
            name: ""
        }
    })
    const { category } = useAppSelector(state => state.category)
    const { data: userData } = useAppSelector(state => state.user)
    const [createCategoryHandler, { isError: isCreateCategoryError, error: createCategoryError }] = useCreateCategoryMutation()
    const [editCategoryHandler, { isError: isEditCategoryError, error: editCategoryError }] = useEditCategoryMutation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (category) {
            setValue("name", category.name)
        }
    }, [category])


    return (
        <div className='grid grid-cols-12 gap-2 pb-5'>
            <form onSubmit={handleSubmit((data) => {
                const categoryData: ICategoryInputFieldTypes = data as ICategoryInputFieldTypes
                if (!userData) return;
                if (category) {
                    editCategoryHandler({ id: category.id, name: categoryData.name, token: userData.token })
                    dispatch(setCategory(null))
                    reset()
                    return
                }
                createCategoryHandler({ name: categoryData.name, token: userData.token })
                reset()
            })} className='col-span-full md:col-span-5'>
                {isCreateCategoryError && <ErrorMessage message={(createCategoryError as IError).data.message} />}
                {isEditCategoryError && <ErrorMessage message={(editCategoryError as IError).data.message} />}
                <InputField errors={errors} register={register} name='name' title="Name" options={{ required: "Name is required", }} />
                <div className='flex justify-end'>
                    {category && <button type='button' onClick={() => {
                        dispatch(setCategory(null))
                        reset()
                    }} className='px-3 py-2 rounded-lg border text-sm mt-2 mr-2 '>Cancel</button>}
                    <button className='px-3 py-2 rounded-lg bg-black text-white text-sm mt-2 '>{category ? "Edit" : "Add"} Category</button>
                </div>
            </form>
            <div className='col-span-full md:col-span-7 md:px-5 '>
                {data && data.categories.length === 0 && <NotFoundCollection message='Categories Not Found' />}
                {data && data.categories.length > 0 && <CategoryTable categories={data.categories} />}
                {data && data.categories.length > 0 && <Paginator limit={5} page={page} total={data.total} updatePage={(newPage) => setPage(newPage)} />}
            </div>
        </div>
    )
}

export default CategoriesPage