import { IPagination } from "../common";
import { api } from "./api";
interface IOrderRequest extends IPagination {
    status?: string;
    token: string;
}
export interface IOrder {
    id: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    shippingAddress: string;
    city: string;
    appartment?: string;
    isNew: boolean;
    orderDetails: IOrderDetail[]
    total: number
    orderDate: Date
    slug: string
}
export interface IOrderDetail {
    id: number;
    productName: string;
    productImages: string;
    quantity: number;
    price: number;
    total: number;
    status: string;
}
export interface IOrderResponse {
    orders: IOrder[],
    total: number
}

export interface IOrderStatResponse {
    pending: number;
    processing: number;
    delivered: number;
    cancelled: number
}

export interface IUpdateOrderStatus {
    status: string;
    id: number;
    token: string;
}

export interface IDeleteOrderRequest {
    id: number;
    token: string;
}

const orderService = api.injectEndpoints({
    endpoints(build) {
        return {
            updateOrderStatus: build.mutation<void, IUpdateOrderStatus>({
                query: (data) => {
                    return {
                        url: `orders/status/${data.id}`,
                        method: "PATCH",
                        body: {
                            "status": data.status
                        },
                        headers: {
                            "authorization": data.token
                        }
                    }
                },
                invalidatesTags: ["order"]
            }),
            fetchSingleOrder: build.query<IOrder, string>({
                query: (slug) => ({
                    url: `orders/${slug}`
                }),
                providesTags: ["order"]
            }),
            fetchOrderStat: build.query<IOrderStatResponse, string>({
                query: (token) => ({
                    url: "orders/stat",
                    headers: {
                        "authorization": token
                    }
                })
            }),
            fetchOrders: build.query<IOrderResponse, IOrderRequest>({
                query: (data) => {
                    console.log(data)
                    const queries: string[] = [];
                    if (data?.page !== undefined) {
                        queries.push(`page=${data.page}`)
                    }
                    if (data?.limit !== undefined) {
                        queries.push(`limit=${data.limit}`)
                    }
                    if (data.status) {
                        queries.push(`status=${data.status}`)
                    }
                    return ({
                        url: `orders?${queries.join("&")}`,
                        headers: {
                            "authorization": data.token
                        }
                    })
                }
            }),
            fetchOrderStatistics: build.query<number[], string>({
                query: (token: string) => ({
                    url: `orders/order-stats`,
                    headers: {
                        "authorization": token
                    }
                })
            }),
            deleteOrder: build.mutation<void, IDeleteOrderRequest>({
                query: ({token, id}) => ({
                    url: `orders/${id}`,
                    method: "DELETE",
                    headers: {
                        "authorization": token
                    }
                })
            })
        }
    },
})

export const {
    useFetchOrdersQuery,
    useFetchOrderStatQuery,
    useFetchSingleOrderQuery,
    useUpdateOrderStatusMutation,
    useFetchOrderStatisticsQuery,
    useDeleteOrderMutation
} = orderService