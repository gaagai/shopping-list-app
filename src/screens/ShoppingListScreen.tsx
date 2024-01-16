import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavBarComponent from "../components/NavBarComponent";
import ProductsCount from "../components/ProductsCount";
import { AddProductForm } from "../components/AddProductForm";
import DepartmentItemsDisplay from "../components/DepartmentItemsDisplay";

const ShoppingListScreen = () => {
  return (
    <>
      <NavBarComponent title="רשימת קניות" />
      <ProductsCount />
      <AddProductForm />
      <DepartmentItemsDisplay />
    </>
  );
};

export default ShoppingListScreen;
