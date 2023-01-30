import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import InputField from '../components/InputField'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoginMutation } from '../service/api/authService';
import { useAppDispatch } from '../hooks/redux-hook';
import { saveUserData } from '../service/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import ErrorMessage from '../components/ErrorMessage';
import { IError } from '../service/common';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});


interface IFormField {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, formState: { errors }, handleSubmit, } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: yupResolver(schema)
  })

  const [loginHandler, { isLoading, isError, error }] = useLoginMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <div className='grid grid-cols-2 gap-x-2 px-10 md:px-20'>
      <div className='col-span-full md:col-span-1 flex items-center justify-center'>
        <img className='md:h-3/4 h-52' src='/images/login-icon.svg' />
      </div>
      <form onSubmit={handleSubmit(async (data) => {
        const formField: IFormField = data as IFormField;
        const loginResponse = await loginHandler({
          password: formField.password.trim(),
          usernameOrEmail: formField.email.trim()
        }).unwrap()

        dispatch(saveUserData({
          ...loginResponse
        }))

        navigate("/")

      })} className='p-2 space-y-5 col-span-full md:col-span-1 ' >
        <div className='flex justify-center'>
          <Logo />
        </div>
        <InputField errors={errors} name="email" register={register} title="Email" isRequired />
        <InputField errors={errors} name="password" register={register} title="Password" isRequired type='password' />
        {isError && <ErrorMessage message={(error as IError).data.message} />}
        <button type='submit' className={`outline-none bg-black tracking-widest text-sm w-full md:w-fit p-3 md:px-5 md:py-3 uppercase  text-white rounded-sm disabled:bg-gray-500 flex justify-center items-center`} disabled={isLoading}>
          {isLoading ? "Submitting..." : "Login"}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-2 w-4 h-4 md:w-6 md:h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>
        </button>
        <div className='capitalize text-end'>
          <span onClick={() => navigate("/account/forgot-password")} className='underline hover:cursor-pointer'>forgot password ? </span>
        </div>
      </form>

    </div>
  )
}

export default LoginPage