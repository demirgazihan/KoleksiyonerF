import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import fabricReducer from './fabricSlice'


export const store = configureStore({
    reducer: {
        app: appReducer,
        fabric: fabricReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch