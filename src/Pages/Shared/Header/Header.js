import React from 'react';
import { Badge, Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';


const Header = () => {

    const {user,logOut} =useAuth();

    return (
        <>
            <Navbar bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">e-Medicine</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/covid">Covid 19 Vaccine</Nav.Link>
                        <Nav.Link as={HashLink} to="/deliveries">Delivery Boys</Nav.Link>

                        <Nav.Link>
        <Badge bg="success" text="info">
        {user?.displayName || 'No User Found'}
        </Badge>
        </Nav.Link>

                        <img style={{height:'50px',width:'50px',borderRadius:'50px'}} src={user.photoURL || 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'} alt="" />
                        
                        {
                            user?.email ? <Button onClick={logOut} variant="light">Logout</Button>  : <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;