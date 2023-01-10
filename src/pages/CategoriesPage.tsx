import { Input } from '@mui/material'
import React from 'react'
import CategoryTable from '../components/category/CategoryTable'
import DeleteButton from '../components/DeleteButton'
import EditButton from '../components/EditButton'
import InputField from '../components/InputField'
import Layout from '../components/Layout'
import NavBar from '../components/NavBar'
import Paginator from '../components/Paginator'
import SideBar from '../components/SideBar'

const CategoriesPage = () => {
    return (
        <Layout >
            <div className='grid grid-cols-12 gap-2 '>
                <div className='col-span-full md:col-span-5'>
                    <InputField title='Name' isRequired={true} />
                    <div className='flex justify-end'>
                        <button className='px-3 py-2 rounded-lg bg-black text-white text-sm mt-2 '>Add Category</button>
                    </div>
                </div>
                <div className='col-span-full md:col-span-7 px-5 '>
                    <CategoryTable />
                    <Paginator />
                </div>
            </div>
        </Layout >
    )
}

export default CategoriesPage