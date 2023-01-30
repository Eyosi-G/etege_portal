import React from 'react'

interface IProps {
    message: string;
}
const NotFoundCollection = (props: IProps) => {
    const { message} = props
    return (
        <div className='flex flex-col items-center'>
            <img src="/images/empty.png" className='h-52' />
            <div className='text-gray-500 uppercase tracking-widest'>{message}</div>
        </div>
    )
}

export default NotFoundCollection