import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../common';




export const api = createApi({
    reducerPath: 'api',
    tagTypes: ["categories", "products", "product"],
    baseQuery: fetchBaseQuery({
        baseUrl,
    }),
    endpoints(build) {
        return {}
    },
})

