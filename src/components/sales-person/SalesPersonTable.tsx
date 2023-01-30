import React from 'react'
import { ISalesPerson } from '../../service/api/salesPersonService';
import SalesPersonTableRow from './SalesPersonTableRow';

interface IProps {
    salesPersons: ISalesPerson[];
}
const SalesPersonTable = (props: IProps) => {
    return (
        <div className='w-full mt-5 border border-gray-300 rounded-lg p-4'>
            <div className='grid grid-cols-6 uppercase text-sm text-gray-500 gap-2 border-b pb-3 border-b-gray-300'>
                <div className='col-span-3'>Name</div>
                <div className='col-span-2 text-center'>Status</div>
                <div className=''>Actions</div>
            </div>
            <div>
                {props.salesPersons.map(salePerson => {
                    return <SalesPersonTableRow salesPerson={salePerson} />
                })}
            </div>
        </div>
    )
}

export default SalesPersonTable