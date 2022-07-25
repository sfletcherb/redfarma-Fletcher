import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logoRedfarma from '../../Image/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css';

function NavBar() {

    return <>

        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logoRedfarma} width="200"
                        height="110" alt='RedFarma'></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Cotización" className='styleMenu'>Cotización</Nav.Link>
                        <Nav.Link href="#Servicios" className='styleMenu'>Servicios</Nav.Link>
                        <Nav.Link href="#Ordenes" className='styleMenu'>Ordenes</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="Search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                    <Nav>
                        <div>
                            <CartWidget />
                        </div>

                    </Nav>
                </Navbar.Collapse>

            </Container>

        </Navbar>



    </>


}

export default NavBar