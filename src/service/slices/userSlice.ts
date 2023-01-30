import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../api/api";
import { ILoginResponse } from "../api/authService";


export interface UserState {
    data: ILoginResponse | null
}

const data = localStorage.getItem("user-data");
const userSate: (ILoginResponse | null) =
    data ? JSON.parse(data) as ILoginResponse : null;


const initialState: UserState = userSate ? { data: userSate } : { data: null }
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        saveUserData: (state, action: PayloadAction<ILoginResponse>) => {
            const data = action.payload;
            state.data = data;
            localStorage.setItem("user-data", JSON.stringify(data))

        },
        logout: (state) => {
            state.data = null;
            localStorage.removeItem("user-data")
        }
    },
   
})

export const { logout, saveUserData } = userSlice.actions

export default userSlice.reducer