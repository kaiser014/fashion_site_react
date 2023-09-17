import React from 'react';
import TopHeader from '../top-header/TopHeader';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './header.css';
const Header = () => {
  return (
    <div>
        <TopHeader />
        <Navbar expand="lg" className="header-navbar">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="header-navbar-nav">
                        <Nav.Link href="/"><FontAwesomeIcon icon={faHome}/></Nav.Link>
                        <Nav.Link href="#home">About Us</Nav.Link>
                        <NavDropdown title="Cloting" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Gift Sarees</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Casual Sarees</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Bridal Sarees</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Wedding Cake" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Party Cake</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Wedding Cake</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdownMenu href="#action/3.1" title="Jewellery" id="collasible-nav-dropdown">
                            <DropdownSubmenu href="#action/3.7" title="Necklace">
                                <NavDropdown.Item href="#action/8.1">Bridal</NavDropdown.Item>
                                <NavDropdown.Item href="#action/8.1">Party</NavDropdown.Item>
                            </DropdownSubmenu>
                            <DropdownSubmenu href="#action/3.7" title="Bangles">
                                <NavDropdown.Item href="#action/8.1">Plated Bangles</NavDropdown.Item>
                                <NavDropdown.Item href="#action/8.1">Party Bangles</NavDropdown.Item>
                                <NavDropdown.Item href="#action/8.1">Plain Bangles</NavDropdown.Item>
                            </DropdownSubmenu>
                            <NavDropdown.Item href="#action/3.1">Wedding Jewellery</NavDropdown.Item>
                        </NavDropdownMenu>
                        <Nav.Link href="#home">Contact Us</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header