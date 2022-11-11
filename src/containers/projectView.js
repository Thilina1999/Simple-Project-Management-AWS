import { React, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarDash from "../components/navbar";
import Table from 'react-bootstrap/Table';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Modal from "react-bootstrap/Modal";
import {
  addProject,
  deleteProject,
  getProjectByUserId,
  updateProjectById,
  getProjectById,
} from "../services/ProjectService";

const ProjectView = () => {
  const [ project , setProject ] = useState([]);
  const  [projectName , setProjectName ]=useState("");
  const [ startDate , setStartDate ]=useState("");
  const [ endDate , setEndDate ] = useState("");
    const [projectNameU, setProjectNameU] = useState("");
    const [startDateU, setStartDateU] = useState("");
    const [endDateU, setEndDateU] = useState("");
  const [ show , setShow ] = useState(false);
  const [ projectid , setProjectId ] = useState("");

  
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
            alert("project add successfully")
            setProjectName("");
            setStartDate("");
            setEndDate("");
            
     }).catch(err => {
      console.log("add error",err);
     });
     
  }
const Delete =(id)=>{
  deleteProject(id).then(res => {
  }).catch(err => {
    console.log("delete error",err);
  })
}
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
      setShow(true);
      setProjectId(id);
      getProjectById(id).then(res => {
                  setProjectNameU(res.data.projectName);
                  setStartDateU(res.data.startDate);
                  setEndDateU(res.data.endDate);
      }).catch(err => {
        console.log("error get data from id",err);
      })

    };

    const update=()=>{
      
      var updateProjectData = {
        projectName:projectNameU,
        startDate:startDateU,
        endDate:endDateU,

      };
      updateProjectById(Number(projectid), updateProjectData)
        .then((res) => {
          alert("update data successfully");
          setProjectNameU("");
          setStartDateU("");
          setEndDateU("");
          handleClose();
        })
        .catch((err) => {
          console.log("update error", err);
        });
    }
  return (
    <>
      <NavbarDash></NavbarDash>
      <div className="container">
        <br></br>
        <br></br>
        <div className="d-flex flex-column">
          <div className="container-fluid">
            <div className="row">
              <div className="col-4">
                <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Project Data Add Form
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="container">
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
                            value={projectName}
                            required
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
                            value={startDate}
                            required
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
                            value={endDate}
                            required
                          />
                        </Form.Group>
                        <br></br>
                        <br></br>
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={SendData}
                          className="icon"
                          disabled={!projectName || !startDate || !endDate}
                        >
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="container">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Project Data
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="container-fluid">
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
                              <tr key={projectlist.id}>
                                <td>{count++}</td>
                                <td>{projectlist.projectName}</td>
                                <td>
                                  {projectlist.startDate.split(/[T:]/)[0]}
                                </td>
                                <td>{projectlist.endDate.split(/[T:]/)[0]}</td>

                                <IconButton
                                  onClick={() => {
                                    handleShow(projectlist.id);
                                  }}
                                >
                                  <span class="icon text-black-50">
                                    <UpgradeIcon
                                      color="primary"
                                      className="icon"
                                    />
                                  </span>
                                </IconButton>
                                <IconButton
                                  onClick={() => {
                                    Delete(projectlist.id);
                                  }}
                                >
                                  <span class="icon text-black-50">
                                    <DeleteIcon
                                      color="primary"
                                      className="icon"
                                    />
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

      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="m-0 font-weight-bold text-primary">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="updateFormBasicProjectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {
                  setProjectNameU(e.target.value);
                }}
             value={projectNameU}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="updateFormBasicStartDate">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => {
                  setStartDateU(e.target.value);
                }}
               value={startDateU}
               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="updateFormBasicEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => {
                  setEndDateU(e.target.value);
                }}
             value={endDateU}
              />
            </Form.Group>
            <br></br>
            <br></br>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={update}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectView;
