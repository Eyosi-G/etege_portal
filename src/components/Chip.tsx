import React from 'react'

interface IProps {
  label: string;
  onDelete?: () => void;
}
const Chip = (props: IProps) => {
  return (
    <div className=' bg-gray-200 rounded-lg px-3 py-1 flex space-x-2 items-center text-sm'>
      <div>{props.label}</div>
      {props.onDelete && <button onClick={props.onDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>}
    </div>
  )
}

export default Chip