import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPlan {
    age: number;
    description: string[];
    name: string;
    price: number;
}

const initialState: {list: IPlan[]} = {
    list: []
}

const planSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<IPlan[]>) =>
        {
            state.list = action.payload;
        }
    }
});

export const { setList } = planSlice.actions;
export default planSlice.reducer;