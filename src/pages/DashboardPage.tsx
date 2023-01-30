import React from 'react'
import MonthlyOrdersChart from '../components/MonthlyOrdersChart'
import MonthlyRevenueChart from '../components/MonthlyRevenueChart'
import OrderStat from '../components/orders/OrderStat'
import OrderSummerizeCard from '../components/orders/OrderSummerizeCard'
import { useFetchOrderStatisticsQuery } from '../service/api/orderService'

const DashboardPage = () => {
    return (
        <div>
            <OrderStat />
            <div className='grid grid-cols-2 gap-2'>
                {/* <MonthlyRevenueChart /> */}
                <MonthlyOrdersChart />
            </div>
        </div>
    )
}

export default DashboardPage