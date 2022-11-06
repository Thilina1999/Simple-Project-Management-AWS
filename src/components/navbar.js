import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

function NavbarDash() {
    const { user, signOut } = useAuthenticator((context) => [context.user]);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Project </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/project">Project View</Nav.Link>
            <Link to="/">
              <button onClick={signOut}>Sign out</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDash;
