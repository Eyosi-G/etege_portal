import React, { useEffect, useRef, useState } from 'react'
import { imageBaseUrl } from '../../service/common';

interface IProps {
    image?: File | string
    deleteImage: () => void;
    index: number;
    updateImage: (index: number, image: File) => void;
}
const ImageContainer = (props: IProps) => {
    const { image, deleteImage, index, updateImage } = props;
    const [preview, setPreview] = useState("")
    const imageRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if(typeof image === "string"){
            setPreview(`${imageBaseUrl}${image}`)
            return
        }
        if (image) {
            const objectUrl = URL.createObjectURL(image);
            setPreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [image]);

    return (
        <div className='h-28 w-28 bg-red-100 relative group rounded-lg overflow-clip'>
            <img className='h-full w-full object-cover object-top' src={preview} />
            <input className='hidden' type="file" ref={imageRef} onChange={(e) => {
                if (!e.target.files) return
                const image = e.target.files[0]
                updateImage(index, image)
                e.target.value = ""

            }} accept='.jpg,.png,jpeg' />

            <div className='hidden bg-black bg-opacity-40 text-white group-hover:flex flex-col absolute text-sm top-0 bottom-0 left-0 right-0 justify-center items-center space-y-2'>
                <button type='button' onClick={()=> imageRef.current?.click()}>Replace</button>
                <button type='button' onClick={deleteImage}>Remove</button>
            </div>

        </div>
    )
}

export default ImageContainer