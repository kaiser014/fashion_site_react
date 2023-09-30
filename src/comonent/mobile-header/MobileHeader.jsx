import React from 'react';
import { Dropdown, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import './mobileheader.css';
import HeaderCartButton from '../header-cartbutton/HeaderCartButton';

const MobileHeader = () => {
  return (
    <div className='mobile-header'>
        <div className='mobile-navbar'>
            <Navbar expand="lg" className="mobile-header-bgcolor">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
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
                    <HeaderCartButton />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        <div className='mobile-header-logo'>
            <div className='mobileheader-logo-image'>
                <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt='Header-logo'/>
            </div>
        </div>
        <div className='mobile-header-search'>
        <Dropdown>
            <Dropdown.Toggle className='topheader-searchbutton' id="dropdown-basic">
                <FontAwesomeIcon icon={faSearch}/>
            </Dropdown.Toggle>

            <Dropdown.Menu className='topheader-searchbar'>
                <input type="search" className='form-control' placeholder='Search Here...'/>
            </Dropdown.Menu>
        </Dropdown>
        </div>
    </div>
  )
}

export default MobileHeader