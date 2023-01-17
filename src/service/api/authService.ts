// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { baseUrl } from "./common";

import { api } from "./api";

export interface ILoginResponse {
    email: string;
    token: string;
    role: string;
}

export interface ILoginRequest {
    email: string;
    password: string;
}


const authService = api.injectEndpoints({
    endpoints(build) {
        return {
            login: build.mutation<ILoginResponse, ILoginRequest>({
                query: (data) => ({
                    url: "auth/login",
                    method: "POST",
                    body: data
                }),

            })
        }
    },
})


export const { useLoginMutation } = authService

