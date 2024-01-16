import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

interface Category {
  id: number;
  name: string;
}

interface ShoppingListItem {
  id: string;
  name: string;
  category: number;
  quantity: number;
}

interface RootState {
  shoppingList: {
    items: ShoppingListItem[];
  };
  categories: {
    categories: Category[];
  };
}

interface GroupedCategory {
  items: ShoppingListItem[];
  total: number;
}

interface GroupedItems {
  [categoryName: string]: GroupedCategory;
}
const DepartmentItemsDisplay = () => {
  const items = useSelector((state: RootState) => state.shoppingList.items);
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const navigate = useNavigate();
  const categoryMap = categories
    ? new Map(categories.map((cat: Category) => [cat.id, cat.name]))
    : new Map();

  // Group items by category
  const groupedItems = items.reduce((acc, item) => {
    const categoryName =
      categoryMap.get(Number(item.category)) || "Unknown Category";
    if (!acc[categoryName]) {
      acc[categoryName] = { items: [], total: 0 };
    }
    acc[categoryName].items.push(item);
    acc[categoryName].total += item.quantity || 1;
    return acc;
  }, {} as GroupedItems);

  function handleConfirmClick(): void {
    navigate("/order-summary");
  }

  return (
    <Container>
      <h2>יש לאסוף מוצרים אלו במחלקות המתאימות</h2>
      <Row className="flex-container">
        {Object.entries(groupedItems).map(([categoryName, data]) => (
          <Col sm={4} className="flex-item" key={categoryName}>
            <h4>
              {categoryName} - {data.total} מוצרים
            </h4>
            <ul>
              {data.items.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.quantity}
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
      <Row className="btn-row">
        <Col className="btn-container">
          <Button
            className="main-btn"
            variant="success"
            onClick={handleConfirmClick}
          >
            סיים הזמנה
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DepartmentItemsDisplay;
