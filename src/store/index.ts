import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import errorSlice from "./errorSlice";
import planSlice from './planSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
        plan: planSlice,
        error: errorSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;