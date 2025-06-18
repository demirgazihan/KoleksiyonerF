import { createSlice } from '@reduxjs/toolkit'
import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import { type FabricType } from '../Types/types'


export interface FabricSliceState {
    fabrics: FabricType[]
}

const initialState: FabricSliceState = {
    fabrics: []
}

const fabricSlice = createSlice({
    name: 'fabric',
    initialState,
    reducers: {
        setFabrics: (state: FabricSliceState, action: PayloadAction<FabricType[]>) => {
            state.fabrics = [...action.payload];
        }
    }, extraReducers: (builder: ActionReducerMapBuilder<FabricSliceState>) => {

    }
})

export const { setFabrics } = fabricSlice.actions
export default fabricSlice.reducer