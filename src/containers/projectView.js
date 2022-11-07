import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarDash from "../components/navbar";
import Table from 'react-bootstrap/Table';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const ProjectView = () => {
  return (
    <>
      <NavbarDash></NavbarDash>
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
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                          <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
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
                      <Table>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Project Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>

                            <IconButton>
                              <span class="icon text-black-50">
                                <UpgradeIcon />
                              </span>
                            </IconButton>
                            <IconButton>
                              <span class="icon text-black-50">
                                <DeleteIcon />
                              </span>
                            </IconButton>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
               
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectView;
