import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import errorSlice from "./errorSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        error: errorSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;