import { IPagination } from "../common";
import { api } from "./api";
import { ICategory } from "./categoryService";

export interface ICreateProductRequest {
    name: string;
    description: string;
    categories: number[];
    images: File[];
    price: number;
    compareAtPrice: number;
    age?: string,
    token: string;
    isSoldOut: boolean;
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
    age?: string
    isSoldOut: boolean;

    token: string;

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
    age?: string
    isSoldOut: boolean;

}

export interface IGetProductResponse {
    total: number;
    products: IProduct[]
}

export interface IFetchProductRequest extends IPagination {
    name?: string;
    token: string;
}

export interface IDeleteProductRequest {
    token: string;
    id: number;
}

const productService = api.injectEndpoints({
    endpoints(build) {
        return {
            fetchProducts: build.query<IGetProductResponse, IFetchProductRequest>({
                query: (data) => {
                    const queries: string[] = [];
                    if (data.page !== undefined) {
                        queries.push(`page=${data.page}`)
                    }
                    if (data.limit !== undefined) {
                        queries.push(`limit=${data.limit}`)
                    }
                    if (data.name) {
                        queries.push(`name=${data.name}`)
                    }
                    return ({
                        url: `products?${queries.join("&")}`,
                        headers: {
                            "authorization": data.token
                        }
                    })
                },
                providesTags: ["products"]
            }),
            deleteProduct: build.mutation<void, IDeleteProductRequest>({
                query: ({id, token}) => ({
                    url: `products/${id}`,
                    method: "DELETE",
                    headers: {
                        "authorization": token
                    }
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
                    const formData = new FormData()
                    formData.append("description", data.description)
                    formData.append("name", data.name)
                    formData.append("price", data.price.toString())
                    formData.append("isSoldOut", data.isSoldOut.toString())
                    if (data.age) {
                        formData.append("age", data.age)
                    }
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
                        headers: {
                            "authorization": data.token
                        }
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
                    formData.append("isSoldOut", data.isSoldOut.toString())
                    formData.append("price", data.price.toString())
                    if (data.age) {
                        formData.append("age", data.age)
                    }
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
                        headers: {
                            "authorization": data.token
                        }
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

