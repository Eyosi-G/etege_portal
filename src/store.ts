import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "./service/slices/userSlice"
import categoryReducer from "./service/slices/categorySlice"
import { api } from "./service/api/api"
export const store = configureStore({
    devTools: true,
    reducer: {
        [api.reducerPath]: api.reducer,
        user: userReducer,
        category: categoryReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(api.middleware)

});

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

