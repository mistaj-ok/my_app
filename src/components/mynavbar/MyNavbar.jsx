import React from 'react'

/* for mobile nav bar */

/* import icons */
import './Mynavbar.css';
// import logo from '../../assets/logo.svg'
// BEM -> block element modifier naming convention
import { Link } from 'react-router-dom';




import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand href="#home">nj</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Learning" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/math">Math</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/cs">Computer Science</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/physics">Physics</NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="#something-else">Something else</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;



/* const Navbar = () => {
  return (
    <div className="navbar">
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          {/* <img src={logo} alt="logo" /> */
//         </div>
//         <div className="navbar-links_container">
//           {/* <Menu /> */}

//         </div>
//       </div>
//       <div className="navbar-sign" >
   
//       </div>
//       <div className='navbar-menu'>
 
//       </div>
//     </div>
//   )
// }

// export default Navbar */