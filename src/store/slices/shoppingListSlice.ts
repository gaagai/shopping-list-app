import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingListItem {
  id: string;
  name: string;
  category: string;
}
interface ShoppingListState {
  items: ShoppingListItem[];
  total: number;
}
const initialState: ShoppingListState = {
  items: [],
  total: 0,
};

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ShoppingListItem>) => {
      state.items.push(action.payload);
      state.total += 1;
    },
  },
});

export const { addItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
