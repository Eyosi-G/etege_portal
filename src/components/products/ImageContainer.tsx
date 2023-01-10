import React from 'react'

const ImageContainer = () => {
    return (
        <div className='h-28 w-28 bg-red-100 relative group rounded-lg overflow-clip'>
            <img className='h-full w-full object-cover object-top' src='https://cdn.shopify.com/s/files/1/0564/3337/7459/products/YUMIDRESS_1_1280x.jpg?v=1672120192' />
            <div className='hidden bg-black bg-opacity-40 text-white group-hover:flex flex-col absolute text-sm top-0 bottom-0 left-0 right-0 justify-center items-center space-y-2'>
                <button>Replace</button>
                <button>Remove</button>
            </div>
            
        </div>
    )
}

export default ImageContainer