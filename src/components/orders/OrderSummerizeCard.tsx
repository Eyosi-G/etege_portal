import React from 'react'

interface IProps {
    color: string;
    icon: React.ReactNode
    text: string;
    amount: number

}
const OrderSummerizeCard = (props: IProps) => {
    return (
        <div className='flex items-center justify-center space-x-2 p-5  border rounded-lg'>
            <div className={`${props.color}   rounded-lg p-3 flex items-center justify-center h-fit`}>
                {props.icon}
            </div>
            <div>
                <div className='text-sm font-normal text-gray-700'>{props.text}</div>
                <div className='font-bold text-2xl'>{props.amount}</div>
            </div>
        </div>
    )
}

export default OrderSummerizeCard