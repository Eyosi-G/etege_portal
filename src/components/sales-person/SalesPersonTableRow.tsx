import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hook'
import { ISalesPerson, useDeleteSalesPersonMutation } from '../../service/api/salesPersonService'
import Confirmation from '../Confirmation'
import GrayBg from '../GrayBg'
import Modal from '../Modal'

interface IProps {
    salesPerson: ISalesPerson
}

const SalesPersonTableRow = (props: IProps) => {
    const [handleDelete] = useDeleteSalesPersonMutation()
    const { data: userData } = useAppSelector(state => state.user)
    const { email, id, isAccountActivated } = props.salesPerson
    const [ openConfirmation, setConfirmation ] = useState(false)

    const status = () => {
        if (isAccountActivated) {
            return <div className='bg-green-200 px-2 py-1 rounded-lg text-xs'>ACTIVATED</div>
        }
        return <div className='bg-red-200 px-2 py-1 rounded-lg text-xs'>NOT ACTIVATED</div>
    }
    return (
        <div className='grid grid-cols-6 mt-5 gap-2 '>
            <Modal open={openConfirmation} backdrop={<GrayBg />}>
                <Confirmation handleCancel={() => { setConfirmation(false) }} handleDelete={() => {
                    if (!userData) return;
                    handleDelete({ id, token: userData.token })
                    setConfirmation(false)

                }} />
            </Modal>
            <div className='col-span-3 break-words'>{email}</div>
            <div className='col-span-2 flex h-fit justify-center items-center'>{status()}</div>
            <div className='items-center space-x-2 h-fit text-xs text-gray-700 font-semibold'>
                <button onClick={() => { setConfirmation(true)}} className='px-3 py-1 rounded-lg bg-gray-200 capitalize'>delete</button>
            </div>
        </div>
    )
}

export default SalesPersonTableRow