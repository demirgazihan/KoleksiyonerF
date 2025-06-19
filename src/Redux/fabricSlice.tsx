import { createSlice } from '@reduxjs/toolkit'
import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import { type FabricType } from '../Types/types'


export interface FabricSliceState {
    fabrics: FabricType[],
    createdFabrics: FabricType[]
}

const initialState: FabricSliceState = {
    fabrics: [],
    createdFabrics: []
}

const fabricSlice = createSlice({
    name: 'fabric',
    initialState,
    reducers: {
        setFabrics: (state: FabricSliceState, action: PayloadAction<FabricType[]>) => {
            state.fabrics = [...action.payload];
        },
        addFabric: (state: FabricSliceState, action: PayloadAction<FabricType>) => {
            state.createdFabrics = [...state.createdFabrics, action.payload];
        },
        deleteFabricByCode: (state: FabricSliceState, action: PayloadAction<string>) => {
            state.createdFabrics = [
                ...state.createdFabrics.filter(
                    (fabric: FabricType) => fabric.code != action.payload
                ),
            ];
        },
        updateFabricByCode: (
            state: FabricSliceState,
            action: PayloadAction<FabricType>
        ) => {
            state.createdFabrics = [...state.createdFabrics.map((fabric: FabricType) =>
                fabric.id != action.payload.id ? fabric : action.payload)];
        },
    }, extraReducers: (builder: ActionReducerMapBuilder<FabricSliceState>) => {

    }
})

export const { setFabrics, addFabric, deleteFabricByCode, updateFabricByCode } = fabricSlice.actions
export default fabricSlice.reducer