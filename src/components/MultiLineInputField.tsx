import React, { useEffect, useState } from 'react'
import { FieldErrors, FieldValues, RegisterOptions, UseFormRegister, UseFormSetValue, UseFormWatch, useWatch } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IProps {
    isRequired?: boolean
    title: string;
    name: string;
    watch: UseFormWatch<FieldValues>
    setValue: UseFormSetValue<FieldValues>
    register: UseFormRegister<FieldValues>,
    options?: RegisterOptions
    errors: FieldErrors<FieldValues>
}
const MultiLineInputField = (props: IProps) => {
    const { setValue, options, name, watch, register, errors } = props
    const value = watch(name)

    useEffect(() => {
        register(name, options);
    }, [register]);

    return (
        <div>
            <p className='flex space-x-2 text-sm mb-2'>
                <span>{props.title}</span>
                {props.isRequired && <span className='text-red-500 '>*</span>}
            </p>
            <ReactQuill
                theme="snow"
                value={value}
                onChange={(val) => { setValue(name, val) }}
            />
            {errors && errors[name] && <div className='text-red-500 text-xs capitalize mt-1'>{errors[name]?.message?.toString()}</div>}

        </div>
    )
}

export default MultiLineInputField