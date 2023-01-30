import React from 'react'

import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate, useParams } from 'react-router-dom'
import { FieldValues, useForm } from 'react-hook-form'
import { useResetPasswordMutation } from '../service/api/authService'
import ErrorMessage from '../components/ErrorMessage'
import SuccessDialog from '../components/SuccessDialog'
import InputField from '../components/InputField'

export interface IFormValues {
    password: string,
    confirmPassword: string,
}

const schema = yup.object().shape({
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string()
        .required('Password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match')

})

const NewPasswordPage = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, setValue } = useForm<FieldValues>({
        defaultValues: {
            password: "",
            confirmPassword: ""
        },
        resolver: yupResolver(schema)
    })

    const { token } = useParams()
    const [resetPasswordHandler, { isSuccess, isLoading, isError }] = useResetPasswordMutation()
    return (
        <div>
            <div className=' px-5 md:px-10 flex justify-between items-center py-5  text-sm md:text-base border-b border-b-gray-200 '>
                <h1 className='font-bold text-3xl tracking-widest uppercase mt-9 mb-3'>
                    <span className='p-2 '>Everything</span>
                    <span className='p-2 bg-black text-white'>Addis</span>
                </h1>
            </div>
            <div className='flex justify-center'>
                <div className='text-center my-10 w-3/4 md:w-1/3'>
                    {isError && <ErrorMessage message="failed to sent password reseting instructions" />}
                    {isSuccess && <SuccessDialog message='We have successfully sent you password reseting instructions to your email ' />}
                    <h1 className='text-4xl'>Reset Password</h1>
                    <div className='my-5'>Enter the email address associated with your account and we will send you a link to reset your password.</div>
                    <form onSubmit={handleSubmit(data => {
                        if (!token) return
                        const formData = data as IFormValues;
                        resetPasswordHandler({
                            password: formData.password,
                            token
                        })
                    })}>
                        <InputField type='password' errors={errors} name='password' title="Password" isRequired={true} register={register} />
                        <div className='my-2' />
                        <InputField type='password' errors={errors} name='confirmPassword' title="Confirm Password" isRequired={true} register={register} />
                        <button disabled={isLoading} type='submit' className='outline-none w-full mt-2 bg-black tracking-widest px-2 py-1 md:px-5 md:py-3 uppercase  text-white rounded-sm disabled:bg-gray-500 flex justify-center'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewPasswordPage