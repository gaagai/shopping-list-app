import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavBarComponent from "../components/NavBarComponent";
import ProductsCount from "../components/ProductsCount";

const ShoppingListScreen = () => {
  return (
    <>
      <NavBarComponent />
      <ProductsCount />
    </>
  );
};

export default ShoppingListScreen;
