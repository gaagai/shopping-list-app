import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  const shoppingListItems = useSelector(
    (state: any) => state.shoppingList.items
  );

  const aggregatedItems = shoppingListItems.reduce(
    (aggregated: any[], item: { name: any; quantity: any }) => {
      const existingItem = aggregated.find(
        (aggItem) => aggItem.name === item.name
      );
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        aggregated.push({ ...item });
      }
      return aggregated;
    },
    []
  );

  const handleConfirmOrder = async () => {};

  return (
    <div>
      <h3 className="list-title">רשימת קניות</h3>
      <ul>
        {aggregatedItems.map((item: any) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;
