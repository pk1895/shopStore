import {
  Form,
  FormGroup,
  Card,
  Button,
} from "react-bootstrap";

const Register = () => {
  return (
    <>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mt-3"></div>

          <div className="col-md-6 mb-3">
            <Card>
              <Form className="m-2">
                <h5>Register To NeoStore</h5>
                <FormGroup className="mt-2">
                  <Form.Control type="text" placeholder="First Name" />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Form.Control type="text" placeholder="Last Name" />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Form.Control type="text" placeholder="Email Id" />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Form.Control type="password" placeholder="Password" />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Form.Control type="text" placeholder="Confirm Password" />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Form.Control type="number" placeholder="Mobile No." />
                </FormGroup>

                <div className="row">
                  <div className="col-md-2 mt-2">
                    <Form.Check
                      type="radio"
                      label="Male"
                      name="group2"
                      id="maleId"
                    />
                  </div>
                  <div className="col-md-2 mt-2">
                    <Form.Check
                      type="radio"
                      label="Female"
                      name="group2"
                      id="femaleId"
                    />
                  </div>
                </div>
                <Button variant="secondary" className="mt-2">
                  Register
                </Button>
              </Form>
            </Card>
          </div>
          <div className="col-md-3 mb-3"></div>
        </div>
      </div>
    </>
  );
};

export default Register;
