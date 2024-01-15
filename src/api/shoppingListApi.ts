import axios from "axios";
import { ShoppingListItem } from "../types";

const apiUrl = process.env.REACT_APP_API_URL;

export const fetchShoppingListItems = async (): Promise<ShoppingListItem[]> => {
  const response = await axios.get<ShoppingListItem[]>(`${apiUrl}/items`);
  return response.data;
};
