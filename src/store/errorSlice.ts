import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IError {
    errors: Record<string, string[]>;
}

const initialState: IError = {
    errors: {}
}

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setErrors: (state, action: PayloadAction<IError>) =>
        {
            state.errors = action.payload.errors;
        },
        addError: (state, action: PayloadAction<{ field: string, messages: string[] }>) => {
            const { field, messages } = action.payload;
            state.errors[field] = messages;
        }
    }
});

export const { setErrors, addError } = errorSlice.actions;
export default errorSlice.reducer;