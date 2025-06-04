import { createSlice } from '@reduxjs/toolkit'
import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import { type AppSliceType, type LoginResponse } from '../Types/types'


const initialState: AppSliceType = {
    currentUser: null,
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setCurrentUser: (state: AppSliceType, action: PayloadAction<LoginResponse | null>) => {
            state.currentUser = action.payload;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<AppSliceType>) => {
        console.log(builder);
    }
})

export const { setCurrentUser } = appSlice.actions
export default appSlice.reducer