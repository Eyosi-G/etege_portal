import React from 'react'
import DeleteButton from '../DeleteButton'
import EditButton from '../EditButton'

interface IProps {
    name: string;
}
const CategoryTableRow = (props: IProps) => {
    return (
        <div className='grid grid-cols-2 mt-5 gap-2 '>
            <div className=''>{props.name}</div>
            <div className='flex  space-x-2 h-fit text-xs text-gray-700 font-semibold'>
                <button className='px-3 py-1 rounded-lg bg-gray-200 capitalize'>edit</button>
                <button className='px-3 py-1 rounded-lg bg-gray-200 capitalize'>delete</button>
            </div>
        </div>
    )
}

export default CategoryTableRow