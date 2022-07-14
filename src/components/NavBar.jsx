/* ---------------------------- STYLED COMPONENTS --------------------------- */
import styled from "styled-components";
/* ----------------------------- REACT BOOTSTRAP ---------------------------- */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const NavBar = () => {
    return (  
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">ETECLAB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Incio</Nav.Link>
                        <Nav.Link href="#link">Nosotros</Nav.Link>
                        <Nav.Link href="#link">Tienda</Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
 
export default NavBar;
