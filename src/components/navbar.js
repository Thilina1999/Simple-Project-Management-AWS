import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router-dom";

function NavbarDash() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
   
    const Loged=()=>{
      signOut();
      localStorage.removeItem("username");
      
    }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Project </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <button onClick={Loged}>Sign out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDash;
