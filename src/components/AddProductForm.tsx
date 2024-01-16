import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slices/shoppingListSlice";
import Form from "react-bootstrap/Form";
import {
  useGetCategoriesQuery,
  useAddProductMutation,
} from "../api/ShoppingListApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { setCategories } from "../store/slices/categoriesSlice";

export const AddProductForm = () => {
  const { data: categories, error, isLoading } = useGetCategoriesQuery();

  const dispatch = useDispatch();

  const [productName, setProductName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  useEffect(() => {
    if (categories) {
      dispatch(setCategories(categories));
    }
  }, [categories, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching categories</div>;

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newProduct = {
      name: productName,
      category: category,
      quantity: 1,
    };
    dispatch(addItem(newProduct));
    setProductName("");
    setCategory("");
  };
  return (
    <Container className="my-5 pb-4 align-items-center border-b">
      <Form onSubmit={handleSubmit}>
        <Row className="">
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="formBasicProduct">
              <Form.Control
                type="text"
                placeholder="מוצר"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3" controlId="formBasicCategory">
              <Form.Control
                as="select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
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
            <Button variant="success" type="submit">
              הוסף
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
