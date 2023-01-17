import { api } from "./api";
import { IPagination } from "../common";


export interface ICategory {
    name: string;
    id: number;
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
            createCategory: build.mutation<void, string>({
                query: (name) => ({
                    url: "categories",
                    method: "POST",
                    body: {
                        name
                    }
                }),
                invalidatesTags: ["categories"]
            }),
            deleteCategory: build.mutation<void, number>({
                query: (id) => ({
                    url: `categories/${id}`,
                    method: "DELETE",
                }),
                invalidatesTags: ["categories"]
            }),
            editCategory: build.mutation<void, ICategory>({
                query: ({ id, name }) => ({
                    url: `categories/${id}`,
                    method: "PATCH",
                    body: {
                        name
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