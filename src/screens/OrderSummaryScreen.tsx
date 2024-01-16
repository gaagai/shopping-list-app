import { useSelector } from "react-redux";
import NavBarComponent from "../components/NavBarComponent";
import { RootState } from "../store/store";

const OrderSummaryScreen = () => {
  const items = useSelector((state: RootState) => state.shoppingList.items);

  return (
    <>
      <NavBarComponent title="סיכום הזמנה" />
    </>
  );
};

export default OrderSummaryScreen;
