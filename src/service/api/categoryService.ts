import { api } from "./api";
import { IPagination } from "../common";


export interface ICategory {
    name: string;
    id: number;
}

export interface ICreateCategoryRequest {
    name: string;
    token: string;
}

export interface IDeleteCategoryRequest {
    id: number;
    token: string;
}

export interface IDeleteCategoryRequest {
    id: number;
    token: string;
}


export interface IEditCategoryRequest extends ICategory {
    token: string;
}

export interface IFetchCategoryResponse {
    categories: ICategory[],
    total: number
}

const categoryService = api.injectEndpoints({

    endpoints(build) {
        return {
            getCategories: build.query<IFetchCategoryResponse, IPagination | undefined>({
                query: (data) => {
                    const queries: string[] = []
                    if (data?.page !== undefined) {
                        queries.push(`page=${data.page}`)
                    }
                    if (data?.limit !== undefined) {
                        queries.push(`limit=${data.limit}`)
                    }

                    return `categories?${queries.join("&")}`
                },
                providesTags: ["categories"]
            }),
            createCategory: build.mutation<void, ICreateCategoryRequest>({
                query: (data) => ({
                    url: "categories",
                    method: "POST",
                    body: {
                        name: data.name
                    },
                    headers: {
                        "authorization": data.token
                    }
                }),
                invalidatesTags: ["categories"]
            }),
            deleteCategory: build.mutation<void, IDeleteCategoryRequest>({
                query: (data) => ({
                    url: `categories/${data.id}`,
                    method: "DELETE",
                    headers: {
                        "authorization": data.token
                    }
                }),
                invalidatesTags: ["categories"]
            }),
            editCategory: build.mutation<void, IEditCategoryRequest>({
                query: ({ id, name, token }) => ({
                    url: `categories/${id}`,
                    method: "PATCH",
                    body: {
                        name
                    },
                    headers: {
                        "authorization": token
                    }
                }),
                invalidatesTags: ["categories"]
            })
        }
    },
})

export const {
    useGetCategoriesQuery,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
    useEditCategoryMutation
} = categoryService