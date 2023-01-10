import React from 'react'

interface IProps {
    isRequired?: boolean
    title: string;
}
const InputField = (props: IProps) => {
    return (
        <div>
            <p className='flex space-x-2 text-sm '>
                <span>{props.title}</span>
                {props.isRequired && <span className='text-red-500 '>*</span>}
            </p>
            <input className=' w-full p-3 border border-gray-300 mt-2' />
        </div>
    )
}

export default InputField