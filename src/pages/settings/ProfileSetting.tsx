import React from 'react'
import InputField from '../../components/InputField'

const ProfileSetting = () => {
    return (
        <div>
            <div className='grid grid-cols-12 gap-2 '>
                <div className='col-span-7'>
                    <div className="text-lg mb-2">Company Information</div>
                    <div className='space-y-3'>
                        <InputField title='Name' isRequired />
                        <InputField title='Address' isRequired />
                    </div>
                </div>
                <div className='col-span-5'>
                    <div>
                        <div className="text-lg mb-2">Contact Person</div>
                        <div className='space-y-3'>
                            <InputField title='Full Name' isRequired />
                            <InputField title='Email' isRequired />
                            <InputField title='Phone' isRequired />
                        </div>
                        <div className='flex justify-end items-center space-x-5 h-fit my-2'>
                            <button className='px-3 py-2 rounded-lg border border-gray-300 '>Discard</button>
                            <button className='px-3 py-2 rounded-lg bg-black text-white  '>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting