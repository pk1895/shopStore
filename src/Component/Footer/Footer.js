import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="page-footer font-small bg-dark text-center text-white pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mt-md-0 mt-3">
              <h5 className="text-uppercase">About Company</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase">Information</h5>
              <ul className="list-unstyled">
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
              </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
              <h5 className="text-uppercase">Newsletter</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
              <Form>
                  <FormGroup>
                      <Form.Control type="email" placeholder="Your email..."/>
                  </FormGroup>
              </Form>
              <Button type="submit" variant="light" className="mt-2">Submit</Button>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://google.com/"> neoStore.com </a>
           | Design By: Prasad Khanapure
        </div>
      </footer>
    </>
  );
};

export default Footer;
