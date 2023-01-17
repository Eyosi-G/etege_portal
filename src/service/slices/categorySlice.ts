import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../api/categoryService";


export interface CategoryState {
    category: ICategory | null
}

const initialState: CategoryState = {
    category: null,
}
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<ICategory | null>) {
            console.log("here")
            state.category = action.payload
        },

    }
})

export const { setCategory } = categorySlice.actions

export default categorySlice.reducer