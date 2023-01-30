import React from 'react'

import "chart.js/auto"
import { Line } from 'react-chartjs-2'
import { useFetchOrderStatisticsQuery } from '../service/api/orderService'
import { useAppSelector } from '../hooks/redux-hook'
import { skipToken } from '@reduxjs/toolkit/dist/query'

const MonthlyOrdersChart = () => {
    const { data: userData } = useAppSelector(state => state.user)
    const { data } = useFetchOrderStatisticsQuery(userData ? userData.token : skipToken)

    return (
        <div className='h-56 w-full mt-5 col-span-full md:col-span-1'>
            <Line
                className='w-full h-full'
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jly', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {

                            label: 'Orders',
                            data: data ? data : []
                        },
                    ],
                }} />
        </div>
    )
}

export default MonthlyOrdersChart