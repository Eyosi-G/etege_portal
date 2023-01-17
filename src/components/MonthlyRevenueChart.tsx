import React from 'react'

import "chart.js/auto"
import { Line } from "react-chartjs-2"


const MonthlyRevenueChart = () => {
    return (
        <div className='h-56 w-full mt-5'>
            <Line
                className='w-full h-full'
                datasetIdKey='id'
                data={{
                    labels: ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jly', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {

                            label: 'Revenue',
                            data: [0, 0, 0, 0, 2000, 1000, 1500, 3000, 1010, 2300, 1000],
                        },
                        {

                            label: 'Products',
                            data: [0, 0, 0, 0, 10, 29, 14, 45, 440, 20, 58],
                        },
                    ],
                }} />
        </div>
    )
}

export default MonthlyRevenueChart