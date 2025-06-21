import { createSlice } from '@reduxjs/toolkit'
import type { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit'
import { type FabricType } from '../Types/types'


export interface FabricSliceState {
    fabrics: FabricType[],
    createdFabrics: FabricType[],
    fabricDetailList: FabricType[],
    selectedFabric: String
}

const initialState: FabricSliceState = {
    fabrics: [],
    createdFabrics: [],
    fabricDetailList: [],
    selectedFabric: ""
}

const fabricSlice = createSlice({
    name: 'fabric',
    initialState,
    reducers: {
        setSelectedFabric: (state: FabricSliceState, action: PayloadAction<String>) => {
            state.selectedFabric = action.payload;
        },
        setFabrics: (state: FabricSliceState, action: PayloadAction<FabricType[]>) => {
            state.fabrics = [...action.payload];
        },
        setFabricDetailList: (state: FabricSliceState, action: PayloadAction<FabricType[]>) => {
            state.fabricDetailList = [...action.payload];
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
            action: PayloadAction<any>
        ) => {
            debugger
            state.createdFabrics = [...state.createdFabrics.map((fabric: FabricType) =>
                fabric.code != action.payload.oldCode ? fabric : action.payload)];
        },
    }, extraReducers: (builder: ActionReducerMapBuilder<FabricSliceState>) => {
        console.log(builder)
    }
})

export const { setFabrics, addFabric, deleteFabricByCode, updateFabricByCode, setFabricDetailList, setSelectedFabric } = fabricSlice.actions
export default fabricSlice.reducer