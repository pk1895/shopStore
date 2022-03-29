import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Card,
  Button,
  Image,
} from "react-bootstrap";
import Product from "../../UI/Product";

const Products = () => {
  return (
    <>
      {/* <p>Products</p> */}
      <div class="container m-4">
        <div class="row">
          <div class="col-3">
            <Card>
              <div className="d-grid gap-2 m-3">
                <Button variant="light">All Products</Button>
                <div class="col-auto">
                  <label class="visually-hidden" for="autoSizingSelect">
                    Catogories
                  </label>
                  <select class="form-select" id="autoSizingSelect">
                    <option selected>Catogories</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col-auto">
                  <label class="visually-hidden" for="autoSizingSelect">
                    Color
                  </label>
                  <select class="form-select" id="autoSizingSelect">
                    <option selected>Color</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </Card>
          </div>
          <div class="col-9">
            <Card>
              <Container>
                <Row style={{ width: "100%", height: "100%" }}>
                  <Col>
                  <Product/>
                  </Col>
                  <Col>
                  <Product/>
                  </Col>
                  <Col class="col-4">
                  <Product/>
                  </Col>
                </Row>
              </Container>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
