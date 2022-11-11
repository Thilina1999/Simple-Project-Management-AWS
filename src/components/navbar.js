import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";

function NavbarDash() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
   
    const Loged=()=>{
      signOut();
      localStorage.removeItem("username");
      
    }

  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid className="container">
        <Navbar.Brand>Project Detail</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-1 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <IconButton className="d-flex" onClick={Loged}>
            <LogoutIcon
              color="primary"
              fontSize="large"
              className="icon"
            ></LogoutIcon>
          </IconButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDash;
