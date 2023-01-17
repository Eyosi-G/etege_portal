import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

interface IProps {
    children: React.ReactNode
    open?: boolean
    backdrop?: React.ReactNode
}
const Modal = (props: IProps) => {
    const modal = document.getElementById("modal");
    const element = document.createElement("div")
    useEffect(() => {
        modal?.appendChild(element);
        return ()=>{
            modal?.removeChild(element)
        }
    }, [props.open])

    if (!props.open) return null;
    return (
        ReactDOM.createPortal((
            <div>
                {props.backdrop ? props.backdrop : <div className='fixed backdrop-blur-sm  bg-gray-800 bg-opacity-75 top-0 right-0 left-0 bottom-0 z-40' />}
                <div>{props.children}</div>
            </div>
        ), element)
    )
}

export default Modal