// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { baseUrl } from "./common";

import { api } from "./api";

export interface ILoginResponse {
    email: string;
    token: string;
    role: string;
    id: number;
}

export interface ILoginRequest {
    usernameOrEmail: string;
    password: string;
}

export interface IUpdatePassword {
    id: number;
    oldPassword: string;
    newPassword: string;
}

export interface IUpdateCompanyInfo {
    id: number;
    companyEmail: string;
    companyAddress: string;
    adminEmail: string;
    token: string;
}

export interface ICompanyInfo {
    email: string;
    address: string;
}


export interface IResetPasswordRequest {
    token: string;
    password: string
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
            }),
            changePassword: build.mutation<void, IUpdatePassword>({
                query: (data) => ({
                    url: `auth/users/${data.id}/change-password`,
                    method: "PATCH",
                    body: {
                        oldPassword: data.oldPassword,
                        newPassword: data.newPassword
                    }
                })
            }),

            forgotPassword: build.mutation<void, string>({
                query: (email) => ({
                    url: `/auth/accounts/forgot-password`,
                    method: "POST",
                    body: {
                        email,
                    }
                })
            }),
            activateAccount: build.mutation<void, string>({
                query: (token) => ({
                    url: `/auth/accounts/activate/${token}`,
                    method: "POST"
                })
            }),
            resetPassword: build.mutation<void, IResetPasswordRequest>({
                query: ({ password, token }) => ({
                    url: `/auth/accounts/new-password`,
                    method: "POST",
                    body: {
                        password,
                        token
                    }
                })
            }),
            updateCompanyInfo: build.mutation<void, IUpdateCompanyInfo>({
                query: (data) => ({
                    url: `auth/users/${data.id}/company-info`,
                    method: "POST",
                    body: {
                        companyEmail: data.companyEmail,
                        companyAddress: data.companyAddress,
                        adminEmail: data.adminEmail
                    },
                    headers: {
                        "authorization": data.token
                    }
                }),
                invalidatesTags: ["company-profile"]
            }),
            getCompanyInfo: build.query<ICompanyInfo, string>({
                query: (token) => ({
                    url: "auth/company-info",
                    headers: {
                        "authorization": token
                    },
                }),
                providesTags: ["company-profile"]
            })
        }
    },
})


export const {
    useLoginMutation,
    useChangePasswordMutation,
    useUpdateCompanyInfoMutation,
    useGetCompanyInfoQuery,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useActivateAccountMutation
} = authService

