import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const SummartForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    phoneNumber: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleConfirmOrder = () => {
    // Implement logic to confirm the order and send data to the backend
  };
  return (
    <Form className="main-form my-3">
      {/* Display selected products from the shopping list */}
      {/* Add a list of selected products here */}

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
        <Form.Label>טלפון:</Form.Label>
        <Form.Control
          type="text"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleInputChange}
          className="mb-2"
        />
      </Form.Group>
      <Button variant="success" onClick={handleConfirmOrder}>
        אשר ההזמנה
      </Button>
    </Form>
  );
};

export default SummartForm;
