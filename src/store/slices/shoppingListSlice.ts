import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingListItem {
  id: string;
  name: string;
  category: string;
}
interface ShoppingListState {
  items: ShoppingListItem[];
}
const initialState: ShoppingListState = {
  items: [],
};

export const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ShoppingListItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
