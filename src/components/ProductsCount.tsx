import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ProductsCount = () => {
  const total = useSelector((state: RootState) => state.shoppingList.total);

  return (
    <Container className="product-count">
      <span> סה״כ : {total} מוצרים</span>
    </Container>
  );
};

export default ProductsCount;
