import { api } from "./api";
import { IPagination } from "../common";


export interface ISalesPerson {
    email: string;
    isAccountActivated: boolean;
    id: number;
}

export interface ICreateSalesPersonRequest {
    email: string;
    token: string;
}

export interface IDeleteSalesPersonRequest {
    id: number;
    token: string;
}



export interface IEditSalesPersonRequest extends ISalesPerson {
    token: string;
}

export interface IFetchSalesPersonResponse {
    salesPersons: ISalesPerson[],
    total: number
}

const categoryService = api.injectEndpoints({

    endpoints(build) {
        return {
            getSalesPerson: build.query<IFetchSalesPersonResponse, IPagination | undefined>({
                query: (data) => {
                    const queries: string[] = []
                    if (data?.page !== undefined) {
                        queries.push(`page=${data.page}`)
                    }
                    if (data?.limit !== undefined) {
                        queries.push(`limit=${data.limit}`)
                    }

                    return `sales-persons?${queries.join("&")}`
                },
                providesTags: ["sales-persons"]
            }),
            registerSalesPerson: build.mutation<void, ICreateSalesPersonRequest>({
                query: (data) => ({
                    url: "sales-persons",
                    method: "POST",
                    body: {
                        email: data.email
                    },
                    headers: {
                        "authorization": data.token
                    }
                }),
                invalidatesTags: ["sales-persons"]
            }),

            deleteSalesPerson: build.mutation<void, IDeleteSalesPersonRequest>({
                query: (data) => ({
                    url: `sales-persons/${data.id}`,
                    method: "DELETE",
                    headers: {
                        "authorization": data.token
                    }
                }),
                invalidatesTags: ["sales-persons"]
            }),

        }
    },
})

export const {
    useDeleteSalesPersonMutation,
    useRegisterSalesPersonMutation,
    useGetSalesPersonQuery
} = categoryService