import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from '../../images/tooth-logo.png'

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/home">
          <img style={{width: '35px'}} src={logo} alt="" />
          <span className="ms-1">Smile</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Nav>
          { user ? 
                <button className="btn btn-link text-secondary text-decoration-none" onClick={handleSignOut}>Sign Out</button>
              :
              <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
