import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingListItem {
  id?: string;
  name: string;
  category: string;
  quantity: number;
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
      const existingItem = state.items.find(
        (item) =>
          item.name === action.payload.name &&
          item.category === action.payload.category
      );
      if (existingItem) {
        existingItem.quantity += 1;
        state.total += 1;
      } else {
        const newItem = {
          ...action.payload,
          id: Date.now().toString(),
          quantity: 1,
        };
        state.total += 1;
        state.items.push(newItem);
      }
    },
    // Other reducers...
  },
});

export const { addItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
