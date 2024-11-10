import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface Item {
  id: number
  name: string
  age: number
  licenseNumber: string
}

interface ItemsState {
  items: Item[]
}

const initialState: ItemsState = {
  items: [
    {
      id: 1,
      name: "John Doe",
      age: 35,
      licenseNumber: "DRV-1234-5678",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      licenseNumber: "DRV-8765-4321",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 42,
      licenseNumber: "DRV-2345-6789",
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 30,
      licenseNumber: "DRV-9876-5432",
    },
    {
      id: 5,
      name: "Charlie Davis",
      age: 25,
      licenseNumber: "DRV-3456-7890",
    },
  ],
}

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    pushItem(store, payload: PayloadAction<Item>) {
      store.items = [...store.items, payload.payload]
    },
  },
})

export const { pushItem } = itemsSlice.actions
export default itemsSlice.reducer
