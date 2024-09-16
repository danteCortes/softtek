import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserState {
    name: string;
    lastName: string;
    birthDay: string;
}

const initialState: IUserState = {
    name: '',
    lastName: '',
    birthDay: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUserState>) => {
            state.name = action.payload.name;
            state.lastName = action.payload.lastName;
            state.birthDay = action.payload.birthDay;
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