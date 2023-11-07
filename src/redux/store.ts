import { configureStore } from '@reduxjs/toolkit'
import Reducer from '@/redux/ShopingSlice'

export const store = configureStore({
  reducer: {
    shop : Reducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch