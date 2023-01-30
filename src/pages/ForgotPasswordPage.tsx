import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useForgotPasswordMutation } from '../service/api/authService'
import SuccessDialog from '../components/SuccessDialog'
import ErrorMessage from '../components/ErrorMessage'
import Logo from '../components/Logo'

const schema = yup.object().shape({
    email: yup.string().email().required('Email is required')
})

interface IFormField {
    email: string;
}

const ForgotPasswordPage = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit, setValue } = useForm<FieldValues>({
        defaultValues: {
            email: ""
        },
        resolver: yupResolver(schema)
    })
    const [forgotPasswordHandler, { isSuccess, isError, isLoading }] = useForgotPasswordMutation()
    return (
        <div>
            <div className=' px-5 md:px-10 flex justify-between items-center py-5  text-sm md:text-base border-b border-b-gray-200 '>
              <Logo />
            </div>
            <div className='flex justify-center'>
                <div className='text-center my-10 w-3/4 md:w-1/3'>
                    {isError && <ErrorMessage message="failed to sent password reseting instructions" />}
                    {isSuccess && <SuccessDialog message='We have sent you password reseting instructions to your email successfuly !!' />}
                    <h1 className='text-4xl'>Forgot Password</h1>
                    <div className='my-5'>Enter the email address associated with your account and we will send you a link to reset your password.</div>
                    <form onSubmit={handleSubmit(data => {
                        const formData = data as IFormField;
                        forgotPasswordHandler(formData.email)
                    })}>
                        <InputField errors={errors} name='email' title="Email" isRequired={true} register={register} />
                        <button disabled={isLoading} type='submit' className='outline-none w-full mt-2 bg-black tracking-widest text-sm p-3 md:px-5 md:py-3  uppercase  text-white rounded-sm disabled:bg-gray-500 flex justify-center'>Continue</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage