import { React, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarDash from "../components/navbar";
import Table from 'react-bootstrap/Table';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {
  getAllProject,
  addProject,
  deleteProject,
  getProjectByUserId,
} from "../services/ProjectService";

const ProjectView = () => {
  const [project, setProject] = useState([]);
  const [projectName,setProjectName]=useState("");
  const [startDate,setStartDate]=useState("");
  const [endDate, setEndDate] = useState("");
  

  
  let count=1;
  let userId2="";
  

  useEffect(() => {
    userId2 = localStorage.getItem("username");
    getProjectByUserId(userId2).then((res) => {
      setProject(res.data);
    });
  });
  

  const SendData =(e)=>{
    e.preventDefault();
     var addProjectData = {
       projectName,
       startDate,
       endDate,
       userId:userId2,
     };
     addProject(addProjectData).then(res => {
     }).catch(err => {
      console.log(err);
      setProjectName("");
     });
     
  }
const Delete =(id)=>{
  deleteProject(id).then(res => {
  }).catch(err => {
    console.log("adad",err);
  })
}
  return (
    <>
      <NavbarDash></NavbarDash>
      <div class="container">
        <br></br>
        <br></br>
        <div class="d-flex flex-column">
          <div class="container-fluid">
            <div class="row">
              <div class="col-4">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      Project Data Add Form
                    </h6>
                  </div>
                  <div class="card-body">
                    <div class="container">
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicProjectName"
                        >
                          <Form.Label>Project Name</Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) => {
                              setProjectName(e.target.value);
                            }}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formBasicStartDate"
                        >
                          <Form.Label>Start Date</Form.Label>
                          <Form.Control
                            type="date"
                            onChange={(e) => {
                              setStartDate(e.target.value);
                            }}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicEndDate"
                        >
                          <Form.Label>End Date</Form.Label>
                          <Form.Control
                            type="date"
                            onChange={(e) => {
                              setEndDate(e.target.value);
                            }}
                          />
                        </Form.Group>
                        <br></br>
                        <br></br>
                        <Button variant="primary" type="submit"
                        onClick={SendData}>
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-8">
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
                          {project.map((projectlist) => {
                            return (
                              
                                <tr>
                                  <td>{count++}</td>
                                  <td>{projectlist.projectName}</td>
                                  <td>{projectlist.startDate}</td>
                                  <td>{projectlist.endDate}</td>

                                  <IconButton>
                                    <span class="icon text-black-50">
                                      <UpgradeIcon />
                                    </span>
                                  </IconButton>
                                  <IconButton
                                    onClick={() => {
                                      Delete(projectlist.id);
                                    }}
                                  >
                                    <span class="icon text-black-50">
                                      <DeleteIcon />
                                    </span>
                                  </IconButton>
                                </tr>
                             
                            );
                          })}
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
