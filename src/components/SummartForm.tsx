import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useSubmitFormMutation } from "../api/ContactFormApi";

const SummartForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    email: "",
  });
  const shoppingListItems = useSelector(
    (state: any) => state.shoppingList.items
  );
  const [submitForm] = useSubmitFormMutation();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleConfirmOrder = async () => {
    try {
      const formData: any = {
        FullName: formValues.name,
        FullAddress: formValues.address,
        Email: formValues.email,
        OrderItemsJson: shoppingListItems,
      };

      await submitForm(formData);

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const isFormIncomplete =
    formValues.name === "" ||
    formValues.address === "" ||
    formValues.email === "";

  return (
    <Form className="main-form my-3">
      <Form.Group>
        <Form.Label>שם מלא:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
          className="mb-2"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>כתובת:</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formValues.address}
          onChange={handleInputChange}
          className="mb-2"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>מייל:</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
          className="mb-2"
        />
      </Form.Group>
      <Button
        className="confirm-btn"
        variant="success"
        onClick={handleConfirmOrder}
        disabled={isFormIncomplete}
      >
        אשר ההזמנה
      </Button>
    </Form>
  );
};

export default SummartForm;
