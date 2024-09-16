import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPlan {
    age: number;
    description: string[];
    name: string;
    price: number;
}

const initialState: {list: IPlan[], plan: IPlan} = {
    list: [],
    plan: {
        age: 0,
        description: [],
        name: '',
        price: 0
    }
}

const planSlice = createSlice({
    name: 'plan',
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<IPlan[]>) =>
        {
            state.list = action.payload;
        },
        setPlan: (state, action: PayloadAction<IPlan>) =>
        {
            state.plan = action.payload;
        }
    }
});

export const { setList, setPlan } = planSlice.actions;
export default planSlice.reducer;