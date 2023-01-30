import React, { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import InputField from '../../components/InputField'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useGetCompanyInfoQuery, useUpdateCompanyInfoMutation } from '../../service/api/authService'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook'
import { createReturn } from 'typescript'
import { skipToken } from '@reduxjs/toolkit/dist/query'
import { saveUserData } from '../../service/slices/userSlice'
import SuccessDialog from '../../components/SuccessDialog'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
    companyEmail: yup.string().email(),
    companyAddress: yup.string().required(),
    adminEmail: yup.string().email()
})
interface IFormValues {
    companyEmail: string,
    companyAddress: string,
    adminEmail: string,
}
const ProfileSetting = () => {
    const { register, formState: { errors }, handleSubmit, setValue } = useForm<FieldValues>({
        defaultValues: {
            companyEmail: "",
            companyAddress: "",
            adminEmail: "",
        },
        resolver: yupResolver(schema)
    })
    const dispatch = useAppDispatch()
    const [updateCompanyInfoHandler, { isSuccess, isLoading }] = useUpdateCompanyInfoMutation()
    const { data: userData } = useAppSelector(state => state.user)
    const { data: companyInfo } = useGetCompanyInfoQuery(userData ? userData.token : skipToken)

    useEffect(() => {
        if (companyInfo) {
            setValue("companyEmail", companyInfo.email)
            setValue("companyAddress", companyInfo.address)
        }

        if (userData) {
            setValue("adminEmail", userData.email)
        }
    }, [companyInfo, userData])

    const navigate = useNavigate()
    return (
        <div>
            {isSuccess && <SuccessDialog message='Profile successfully updated' />}
            <form onSubmit={handleSubmit(async (data) => {
                if (!userData) return
                const formData = data as IFormValues;
                await updateCompanyInfoHandler({
                    adminEmail: formData.adminEmail,
                    companyAddress: formData.companyAddress,
                    companyEmail: formData.companyEmail,
                    id: userData.id,
                    token: userData.token
                }).unwrap()

                dispatch(saveUserData({
                    ...userData,
                    email: formData.adminEmail
                }))

            })} className='grid grid-cols-12 gap-2 '>
                <div className='col-span-7'>
                    <div className="text-lg mb-2">Company Information</div>
                    <div className='space-y-3'>
                        <InputField errors={errors} register={register} name="companyEmail" title='Email' isRequired />
                        <InputField errors={errors} register={register} name="companyAddress" title='Address' isRequired />
                    </div>
                </div>
                <div className='col-span-5'>
                    <div>
                        <div className="text-lg mb-2">Admin Information</div>
                        <div className='space-y-3'>
                            <InputField errors={errors} register={register} name="adminEmail" title='Email' isRequired />
                        </div>
                        <div className='flex justify-end items-center space-x-5 h-fit my-2'>
                            <button className='px-3 py-2 rounded-lg border border-gray-300 ' onClick={()=> navigate(-1) }>Discard</button>
                            <button className='px-3 py-2 rounded-lg bg-black text-white  '>{isLoading ? "Submitting..." : "Save Changes"}</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ProfileSetting