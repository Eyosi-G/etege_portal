import React, { useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import InputField from '../components/InputField'
import NotFoundCollection from '../components/NotFoundCollection'
import Paginator from '../components/Paginator'
import SalesPersonTable from '../components/sales-person/SalesPersonTable'
import { useAppSelector } from '../hooks/redux-hook'
import { useGetSalesPersonQuery, useRegisterSalesPersonMutation } from '../service/api/salesPersonService'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup";
import ErrorMessage from '../components/ErrorMessage'
import SuccessDialog from '../components/SuccessDialog'
import { IError } from '../service/common'

interface IFormField {
  email: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is Required"),
});


const SalesPersonsPage = () => {
  const [page, setPage] = useState(0)
  const { data } = useGetSalesPersonQuery({ limit: 5, page })
  const { formState: { errors }, handleSubmit, register, reset } = useForm<FieldValues>({
    defaultValues: {
      email: ""
    },
    resolver: yupResolver(schema)
  })
  const { data: userData } = useAppSelector(state => state.user)
  const [regiserSalesPersonHandler, { isSuccess, isError, error }] = useRegisterSalesPersonMutation()



  return (
    <div className='grid grid-cols-12 gap-2 pb-5'>
      <form onSubmit={handleSubmit((data) => {
        if (!userData) return;
        const formData: IFormField = data as IFormField
        regiserSalesPersonHandler({ token: userData.token, email: formData.email })
        reset()
      })} className='col-span-full md:col-span-5'>
        {isError && <ErrorMessage message={(error as IError).data.message } />}
        <InputField isRequired errors={errors} register={register} name='email' title="Email" />
        <div className='flex justify-end'>
          <button type='button' onClick={() => {
            reset()
          }} className='px-3 py-2 rounded-lg border text-sm mt-2 mr-2 '>Cancel</button>
          <button className='px-3 py-2 rounded-lg bg-black text-white text-sm mt-2 '>Register</button>
        </div>
      </form>
      <div className='col-span-full md:col-span-7 md:px-5 '>
        {data && data.salesPersons.length === 0 && <NotFoundCollection message='Sales Persons Not Found' />}
        {data && data.salesPersons.length > 0 && <SalesPersonTable salesPersons={data.salesPersons} />}
        {data && data.salesPersons.length > 0 && <Paginator limit={5} page={page} total={data.total} updatePage={(newPage) => setPage(newPage)} />}
      </div>
    </div>
  )
}

export default SalesPersonsPage