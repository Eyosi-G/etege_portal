import { api } from "./api";
import { ICategory } from "./categoryService";

export interface ICreateProductRequest {
    name: string;
    description: string;
    categories: number[];
    images: File[];
    price: number;
    compareAtPrice: number;
}

export interface IUpdateProductRequest {
    id: number;
    name: string;
    description: string;
    categories: number[];
    toBeUpdatedImages: string[];
    images: File[];
    price: number;
    compareAtPrice: number;
}

export interface IProduct {
    id: number;
    name: string;
    description: string;
    images: string[];
    slug: string;
    price: number;
    compareAtPrice?: number;
    categories: ICategory[]
}

export interface IGetProductResponse {
    total: number;
    products: IProduct[]
}
const productService = api.injectEndpoints({
    endpoints(build) {
        return {
            fetchProducts: build.query<IGetProductResponse, void>({
                query: () => ({
                    url: "products"
                }),
                providesTags: ["products"]
            }),
            deleteProduct: build.mutation<void, number>({
                query: (id) => ({
                    url: `products/${id}`,
                    method: "DELETE"
                }),

                invalidatesTags: ["products"]
            }),
            getProduct: build.query<IProduct, string>({
                query: (id) => ({
                    url: `products/${id}`,
                }),
                providesTags: ["product"]

            }),
            createProduct: build.mutation<void, ICreateProductRequest>({
                query: (data) => {
                    console.log(data)
                    const formData = new FormData()
                    formData.append("description", data.description)
                    formData.append("name", data.name)
                    formData.append("price", data.price.toString())
                    if (data.compareAtPrice) {
                        formData.append("comparedAtPrice", data.compareAtPrice?.toString())
                    }
                    data.categories.forEach((category, index) => {
                        formData.append(`categories[]`, category.toString())
                    })
                    console.log(formData.getAll("categories"))
                    data.images.forEach(image => {
                        formData.append("images", image)
                    })

                    return ({
                        url: "products",
                        method: "POST",
                        body: formData,
                    })
                },
                invalidatesTags: ["products"]
            }),
            updateProduct: build.mutation<void, IUpdateProductRequest>({
                query: (data) => {
                    console.log(data)
                    const formData = new FormData()
                    formData.append("description", data.description)
                    formData.append("name", data.name)
                    formData.append("price", data.price.toString())
                    if (data.compareAtPrice) {
                        formData.append("comparedAtPrice", data.compareAtPrice?.toString())
                    }

                    data.toBeUpdatedImages.forEach(image => {
                        formData.append(`toBeUpdatedImages[]`, image.toString())
                    })
                    data.categories.forEach((category, index) => {
                        formData.append(`categories[]`, category.toString())
                    })
                    data.images.forEach(image => {
                        formData.append("images", image)
                    })

                    return ({
                        url: `products/${data.id}`,
                        method: "PATCH",
                        body: formData,
                    })
                },
                invalidatesTags: ["products"]
            })
        }
    },
})

export const {
    useGetProductQuery,
    useFetchProductsQuery,
    useCreateProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation
} = productService

