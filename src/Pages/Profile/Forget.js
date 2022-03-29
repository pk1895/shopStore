import { Form, FormGroup, Card, Button, Alert } from "react-bootstrap";

const Forget = () => {
  return (
    <>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mt-3"></div>

          <div className="col-md-6 mb-3">
            <Card>
              <Form className="m-2">
                <h5>Recover Password</h5>
                <hr />
                <Alert variant="danger">
                Verification Code has been sent to your registered mail ID.
                </Alert>
                
                <FormGroup className="mt-2">
                  <Form.Control type="text" placeholder="Verification Code" />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Form.Control type="password" placeholder="New Password" />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Form.Control type="text" placeholder="Confirm Password" />
                </FormGroup>

                <Button variant="primary" className="mt-2">
                  Submit
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

export default Forget;
