import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Badge
} from "react-bootstrap";

import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const onProfile = () => {
    navigate("/login");
  };
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <h1>
              <b className="text-white">Neo</b>
              <span>
                <b className="text-danger">Store</b>
              </span>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
              <Nav.Item className="ms-auto">
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms-6">
                <Nav.Link href="/products">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms">
                <Nav.Link href="/orders">Order</Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms-auto">
                <Form>
                  <FormControl type="text" placeholder="Search" />
                </Form>
              </Nav.Item>
              <Nav.Item className="ms-2">
                <Button variant="light">
                  Cart <Badge>9</Badge>
                  <span className="visually-hidden">Items</span>
                </Button>
              </Nav.Item>
              <Nav.Item className="ms-2">
                <Button variant="light" onClick={onProfile}>
                  Profile
                </Button>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
