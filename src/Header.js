import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  function logOut() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            Prodavnica zimske opreme Kopaonik
          </Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            {localStorage.getItem("user-info") ? (
              <>
                {JSON.parse(localStorage.getItem("user-info")).user_status ? (
                  <>
                    <Link to="/">Lista proizvoda</Link>
                    <Link to="/add">Dodaj proizvod</Link>
                    <Link to="/search">Pretrazi proizvod</Link>
                    <Link to="/listPostAdmin">Lista objava</Link>
                    <Link to="/addPost">Dodaj objavu</Link>
                  </>
                ) : (
                  <>
                    <Link to="/listPost">Vesti</Link>
                    <Link to="/list">Lista proizvoda</Link>
                    <Link to="/search">Pretrazi proizvod</Link>
                    <Link to="/basket">Korpa</Link>
                    <Link to="/converter">Konverter</Link>
                    <Link to="/map">Kontakt</Link>
                  </>
                )}
              </>
            ) : (
              <>
                <Link to="/login">Prijavi se</Link>
                <Link to="/register">Registruj se</Link>
              </>
            )}
          </Nav>
          {localStorage.getItem("user-info") ? (
            <Nav>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
