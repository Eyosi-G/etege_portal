import React from 'react'

import { UseFormRegister, FieldValues, RegisterOptions, FieldErrors, FieldValue, } from 'react-hook-form'

interface IProps {
    title: string;
    isRequired?: boolean;
    name: string,
    register: UseFormRegister<FieldValues>;
    options?: RegisterOptions
    errors: FieldErrors<FieldValues>
    placeholder?: string;
    type?: string;
}

const InputField = (props: IProps) => {
    const { type, title, isRequired, name, register, options, errors, placeholder } = props
    console.log(errors[name])
    return (
        <div>
            <p className='flex space-x-2 text-sm '>
                <span>{title}</span>
                {isRequired && <span className='text-red-500 '>*</span>}
            </p>
            <input type={type} placeholder={placeholder} {...register(name, options)} className={`w-full p-3 border border-gray-300 mt-2 `}/>
            {errors && errors[name] && <div className='text-red-500 text-xs capitalize mt-1 text-left'>{errors[name]?.message?.toString()}</div>}
        </div>
    )
}

export default InputField