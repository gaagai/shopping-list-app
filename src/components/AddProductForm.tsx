import Form from "react-bootstrap/Form";
import { useGetCategoriesQuery } from "../api/ShoppingListApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const AddProductForm = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching categories</div>;

  return (
    <Container className="mt-5 align-items-center">
      <Form>
        <Row className="">
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="formBasicProduct">
              <Form.Control type="text" placeholder="מוצר" />
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Control as="select" defaultValue="">
                <option value="" disabled>
                  קטגוריה
                </option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Button variant="primary" type="submit">
              הוסף
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
