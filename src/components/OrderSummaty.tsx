import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const OrderSummary = () => {
  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    address: "",
    phoneNumber: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleConfirmOrder = async () => {
    //
  };

  return <div>{/* ... Rest of the component remains the same */}</div>;
};

export default OrderSummary;
