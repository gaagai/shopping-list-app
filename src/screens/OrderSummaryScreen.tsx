import { useSelector } from "react-redux";
import NavBarComponent from "../components/NavBarComponent";
import { RootState } from "../store/store";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import SummartForm from "../components/SummartForm";

const OrderSummaryScreen = () => {
  return (
    <>
      <NavBarComponent title="סיכום הזמנה" />
      <Container>
        <SummartForm />
      </Container>
    </>
  );
};

export default OrderSummaryScreen;
