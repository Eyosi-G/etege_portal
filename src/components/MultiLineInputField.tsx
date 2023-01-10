import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface IProps {
    isRequired?: boolean
    title: string;
}
const MultiLineInputField = (props: IProps) => {
    const [value, setValue] = useState('');
    return (
        <div>
            <p className='flex space-x-2 text-sm mb-2'>
                <span>{props.title}</span>
                {props.isRequired && <span className='text-red-500 '>*</span>}
            </p>
            <ReactQuill theme="snow" value={value} onChange={setValue} />

            {/* <input className=' w-full p-3 border border-gray-300 mt-2' /> */}
        </div>
    )
}

export default MultiLineInputField