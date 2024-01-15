import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavBarComponent from "../components/NavBarComponent";
import ProductsCount from "../components/ProductsCount";
import { AddProductForm } from "../components/AddProductForm";

const ShoppingListScreen = () => {
  return (
    <>
      <NavBarComponent />
      <ProductsCount />
      <AddProductForm />
    </>
  );
};

export default ShoppingListScreen;
