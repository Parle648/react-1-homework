import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "../features/items-slice"

export const appStateStore = configureStore({
  reducer: {
    itemSlice: itemsSlice,
  },
})
