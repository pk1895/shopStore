import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Card,
  Button,
  Nav,
  Modal
} from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = () => {
  const [email,setEmail]= useState('');
  const [pswd,setPswd]= useState('');
  const navigate = useNavigate();

  const onEmailChange =(evt)=>{
    setEmail(evt.target.value);
  }

  const onPswdChange =(evt)=>{
    setPswd(evt.target.value);
  }

  const onLogin =()=>{
    if(email === 'pn@test.com' && pswd === '1234'){
        navigate("/home");
    }else{
      return (
      <>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
        </>
      )
    }
  }

  return (
    <>
      <Container className="m-4">
        <Row>
          <Col>
            <Card>
              <div className="d-grid gap-3 m-3">
                <Button style={{ backgroundColor: "#4267B2" }} size="lg">
                  Facebook
                </Button>
                <Button style={{ backgroundColor: "#DB4437" }} size="lg">
                  Google
                </Button>
                <Button style={{ backgroundColor: "#00acee" }} size="lg">
                  Twitter
                </Button>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <Form className="m-2">
                <h5>Login To NeoStore</h5>
                <FormGroup className="mt-2">
                  <Form.Control 
                  onChange={onEmailChange}
                  type="email" 
                  placeholder="Your email..." />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Form.Control
                    onChange={onPswdChange}
                    type="password"
                    placeholder="Your password..."
                  />
                </FormGroup>
                <Button variant="secondary" className="mt-2" onClick={onLogin}>
                  Login
                </Button>
              </Form>
            </Card>
            <div className="row">
              <div className="col-md-2">
                <Nav.Link href="/register"> Register </Nav.Link>
              </div>
              <div className="col-md-2">
                <Nav.Link href="/forget"> Forgotten? </Nav.Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
