import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Prodavnica ski opreme</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            <Link to="/add">Dodaj proizvod</Link>
            <Link to="/update">Azuriraj proizvod</Link>
            <Link to="/login">Prijavi se</Link>
            <Link to="/register">Registruj se</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
