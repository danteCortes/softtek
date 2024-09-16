import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
    name: string;
    lastName: string;
    birthDay: string;
    document_type: string;
    document_number: string;
    cellphone: string;
}

const initialState: IUserState = {
    name: '',
    lastName: '',
    birthDay: '',
    document_number: '',
    document_type: '',
    cellphone: ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserState>) => {
            state.name = action.payload.name;
            state.lastName = action.payload.lastName;
            state.birthDay = action.payload.birthDay;
            state.document_type = action.payload.document_type;
            state.document_number = action.payload.document_number;
            state.cellphone = action.payload.cellphone;
        },
        clearUser: (state) => {
            state.name = '';
            state.lastName = '';
            state.birthDay = '';
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;