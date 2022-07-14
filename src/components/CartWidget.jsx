import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const CartWidget = () => {
  return (
    <NavDropdown title={<FontAwesomeIcon icon={faCartShopping} />} id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Item 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Item 3</NavDropdown.Item>

    </NavDropdown>
  )
}

export default CartWidget