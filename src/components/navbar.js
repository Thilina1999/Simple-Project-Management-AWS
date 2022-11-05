import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthenticator } from "@aws-amplify/ui-react";

function NavbarDash() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Project Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/project">Project View</Nav.Link>
            <button onClick={signOut}>Sign out</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDash;
