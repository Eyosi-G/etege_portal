import React, { useEffect, useState } from 'react'

interface IProps {
    status: "ORDERED" | "OUT_OF_STOKE" | "IN_TRANSIT" | "DELIVERED" | "CANCELED";
}
const OrderStatus = (props: IProps) => {

    let bgColor = ""
    let circleBgColor = ""
    let textColor = ""
    let name = ""

    switch (props.status) {
        case "ORDERED":
            {
                bgColor = "bg-white border border-color-gray-300"
                circleBgColor = "bg-black"
                textColor = "text-black"
                name = "Unprocessed"
                break;
            }
        case "OUT_OF_STOKE":
            {
                bgColor = "bg-orange-200"
                circleBgColor = "bg-orange-700"
                textColor = "text-orange-700"
                name = "Out of Stock"
                break;
            }
        case "IN_TRANSIT":
            {
                bgColor = "bg-green-200"
                circleBgColor = "bg-green-700"
                textColor = "text-green-700"
                name = "In Transit"
                break;
            }
        case "DELIVERED":
            {
                bgColor = "bg-blue-200"
                circleBgColor = "bg-blue-700"
                textColor = "text-blue-700"
                name = "Completed"
                break;
            }
        case "CANCELED":
            {
                bgColor = "bg-red-200"
                circleBgColor = "bg-red-700"
                textColor = "text-red-700"
                name = "Canceled"
                break;
            }

    }


    return (
        <div className={` ${bgColor} flex items-center space-x-2 px-3 py-1 rounded-full`}>
            <span className={`${circleBgColor} p-1.5 rounded-full`}></span>
            <span className={`${textColor}  uppercase text-sm tracking-wide`}>{name}</span>
        </div>
    )
}

export default OrderStatus