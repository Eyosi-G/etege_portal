import React from 'react'
import InputField from '../../components/InputField'

const SecuritySetting = () => {
    return (
        <div>
            <div className="text-lg mb-2">Change Password</div>
            <div className='space-y-3'>
                <InputField title='Old Password' isRequired />
                <InputField title='New Password' isRequired />
                <InputField title='Confirm New Password' isRequired />
            </div>
            <div className='flex justify-end items-center space-x-5 h-fit my-2'>
                <button className='px-3 py-2 rounded-lg border border-gray-300 '>Discard</button>
                <button className='px-3 py-2 rounded-lg bg-black text-white  '>Save Changes</button>
            </div>
        </div>
    )
}

export default SecuritySetting