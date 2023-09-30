import React from 'react';
import { Dropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './headercartbutton.css';

const HeaderCartButton = () => {
  return (
    <div className='topheader-cart-button'>
    <Dropdown>
        <Dropdown.Toggle className='topheader-button' id="dropdown-basic">
            <FontAwesomeIcon icon={faShoppingCart}/> Cart
        </Dropdown.Toggle>

        <Dropdown.Menu className='topheader-cart-menu'>
            <div className='topheader-cartitem-details'>
                <div className='topheader-cartitem-allcontent'>
                    <div className='topheader-cartitem'>
                        <div className='topheader-cartitem-image'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/monthofproduct1.jpg'} alt=''/>
                        </div>
                        <div className='topheader-cartitem-content'>
                            <h3>Product Name</h3>
                            <p>1 X $3.30</p>
                        </div>
                    </div>
                    <div className='topheader-cartitem'>
                        <div className='topheader-cartitem-image'>
                            <img src={process.env.PUBLIC_URL + '/assets/images/monthofproduct1.jpg'} alt=''/>
                        </div>
                        <div className='topheader-cartitem-content'>
                            <h3>Product Name</h3>
                            <p>1 X $3.30</p>
                        </div>
                    </div>
                </div>
                <div className='topheader-subtotal'>
                    <h4>Sub Total</h4>
                    <h4>$3.30</h4>
                </div>
                <div className='topheader-cartlist-button'>
                    <div className='topheader-cartlist-cartbtn'>
                        <Button className='btn topheader-btn'>Cart</Button>
                    </div>
                    <div className='topheader-cartlist-checkoutbtn'>
                        <Button className='btn topheader-btn topheader-btn1'>Checkout</Button>                                            
                    </div>
                </div>
            </div>
        </Dropdown.Menu>
    </Dropdown>
</div>
  )
}

export default HeaderCartButton;