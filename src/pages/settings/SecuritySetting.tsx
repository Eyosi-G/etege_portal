import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import InputField from '../../components/InputField'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useChangePasswordMutation } from '../../service/api/authService';
import { useAppSelector } from '../../hooks/redux-hook';
import SuccessDialog from '../../components/SuccessDialog';
import { useNavigate } from 'react-router-dom';


export interface IFormValues {
    oldPassword: string,
    newPassword: string,
    confirmNewPassword: string
}

const schema = yup.object().shape({
    oldPassword: yup.string().required('Password is required'),
    newPassword: yup.string().required('Password is required'),
    confirmNewPassword: yup.string()
        .required('Password is required')
        .oneOf([yup.ref('newPassword'), null], 'Passwords must match')

})

const SecuritySetting = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<FieldValues>({
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        },
        resolver: yupResolver(schema)
    })
    const { data: userData } = useAppSelector(state => state.user)
    const [changePasswordHandler, { isSuccess, isLoading }] = useChangePasswordMutation()
    const navigate = useNavigate()
    return (
        <form onSubmit={handleSubmit((data) => {
            const formValues = data as IFormValues;
            if (!userData) return;
            changePasswordHandler({
                id: userData.id,
                newPassword: formValues.newPassword,
                oldPassword: formValues.oldPassword
            })
        })}>
            {isSuccess && <SuccessDialog message='Password successfully updated' />}

            <div className="text-lg mb-2">Change Password</div>
            <div className='space-y-3'>
                <InputField type='password' name='oldPassword' errors={errors} register={register} title='Old Password' isRequired />
                <InputField type='password' name='newPassword' errors={errors} register={register} title='New Password' isRequired />
                <InputField type='password' name='confirmNewPassword' errors={errors} register={register} title='Confirm New Password' isRequired />
            </div>
            <div className='flex justify-end items-center space-x-5 h-fit my-2'>
                <button type='button' className='px-3 py-2 rounded-lg border border-gray-300' onClick={() => navigate(-1)} >Discard</button>
                <button type='submit' className='px-3 py-2 rounded-lg bg-black text-white'>{isLoading ? "Submitting ..." : "Save Changes"}</button>
            </div>
        </form>
    )
}

export default SecuritySetting