import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
                <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark" sticky="top">
                    <Container>
                    <Navbar.Brand href="#home">
                        <img className="logo" src={logo} alt="" />
                        <span className="logo_head">Hasan Travels</span>
                        </Navbar.Brand>
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home#home" className="text-white text-capitalize">Home</Nav.Link>
                            <Nav.Link as={Link} to="/services#services" className="text-white text-capitalize">Services</Nav.Link>
                            <Nav.Link as={Link} to="/about#about" className="text-white text-capitalize">About Us</Nav.Link>
                            {
                                user.email && <Nav.Link as={Link} to="/manage#manage" className="text-white text-capitalize">Manage all</Nav.Link>
                            }
                            {
                                user.email && <Nav.Link as={Link} to='/myOrder#myOrder' className="text-white text-capitalize">My Order</Nav.Link>
                            }
                            
                                { user.email ?
                                <button onClick={logOut}>Log Out</button>
                                :
                                <Nav.Link as={Link} to="/registration#registration" className="text-white text-uppercase">Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/registration#registration" className="text-white">Registration</Nav.Link>
                            <Navbar.Text>
                                <h5><span className="text-info">Signed as:</span> <span className="text-danger">
                                    {user.displayName}
                                    </span></h5>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
    );
};

export default Header;