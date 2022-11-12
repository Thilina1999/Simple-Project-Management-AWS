import { React, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavbarDash from "../components/navbar";
import Table from 'react-bootstrap/Table';
import UpgradeIcon from "@mui/icons-material/Upgrade";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Modal from "react-bootstrap/Modal";
import {  useAuthenticator } from "@aws-amplify/ui-react";
import {
  addProject,
  deleteProject,
  getProjectByUserId,
  updateProjectById,
  getProjectById,
} from "../services/ProjectService";

const ProjectView = () => {
   const { user } = useAuthenticator((context) => [context.user]);

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
 
  

  useEffect(() => {
    getData();
  },[]);
  
  const getData=()=>{
     getProjectByUserId(user.username).then((res) => {
       setProject(res.data);
     });
  }

  const SendData =(e)=>{
    e.preventDefault();
     var addProjectData = {
       projectName,
       startDate,
       endDate,
       userId:user.username,
     };
     addProject(addProjectData).then(res => {
                  setProjectName("");
                  setStartDate("");
                  setEndDate("");
                  getData();
            alert("project add successfully")

            
     }).catch(err => {
      console.log("add error",err);
     });
     
  }
const Delete =(id)=>{
  deleteProject(id).then(res => {
    getData();
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
                    setProjectNameU("");
                    setStartDateU("");
                    setEndDateU("");
                    handleClose();
                    getData();
          alert("update data successfully");

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
        <div className="card-header py-3">
          <Modal.Header>
            <Modal.Title className="m-0 font-weight-bold text-primary">
              Project Data Update Form
            </Modal.Title>
          </Modal.Header>
        </div>
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
                value={startDateU.split(/[T:]/)[0]}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="updateFormBasicEndDate">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => {
                  setEndDateU(e.target.value);
                }}
                value={endDateU.split(/[T:]/)[0]}
              />
            </Form.Group>
            <br></br>
            <br></br>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="icon">
            Close
          </Button>
          <Button variant="primary" onClick={update} className="icon">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectView;
