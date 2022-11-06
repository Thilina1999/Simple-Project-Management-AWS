import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const ProjectView = () => {
  return (
    <div class="container">
      <br></br>
      <br></br>
      <div class="d-flex flex-column">
        <div class="container-fluid">
          <div class="row">
            <div class="col-3">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Project Data Add Form
                  </h6>
                </div>
                <div class="card-body">
                  <div class="container">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-9">
              <div class="container">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Project Data
                  </h6>
                </div>
                <div class="card-body">
                  <div class="container-fluid">
                    <div class="row py-2 align-items-center justify-content-center text-center font-weight-bold">
                      <div class="col-md-2">Project id</div>
                      <div class="col-md-3">Project Name</div>
                      <div class="col-md-3">Start Date</div>
                      <div class="col-md-3">End Date</div>
                      <div class="col-md-1"></div>
                      <div class="col-md-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
             
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
