import React from 'react'
import InputField from '../../components/InputField'

const ProfiltSetting = () => {
    return (
        <div>
            <div className="text-lg mb-2">Profit Settings</div>
            <div className='space-y-3'>
                {/* <InputField title='Profit Percentage' isRequired />
                <InputField title='Free Delivery' isRequired /> */}
            </div>
            <div className='flex justify-end items-center space-x-5 h-fit my-2'>
                <button className='px-3 py-2 rounded-lg border border-gray-300 '>Discard</button>
                <button className='px-3 py-2 rounded-lg bg-black text-white  '>Save Changes</button>
            </div>
        </div>
    )
}

export default ProfiltSetting