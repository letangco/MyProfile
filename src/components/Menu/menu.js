import React from 'react';
import './css/menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faUserTie, faBriefcase, faPuzzlePiece, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import anh1 from '../../image/coffee-apple.jpg';
import avatar from '../../image/Circle_LTC_AVT.png';
import { Nav, Navbar, Carousel } from 'react-bootstrap';
class Menu extends React.Component {
  
  render() {
    return (
      <>
        <Navbar expand="md" className="fixed-top">
          <Navbar.Brand href="#home">LE TANG CO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home"><FontAwesomeIcon icon={faHome}/> HOME</Nav.Link>
              <Nav.Link href="#about"><FontAwesomeIcon icon={faUserTie}/> ABOUT ME</Nav.Link>
              <Nav.Link href="#resume"><FontAwesomeIcon icon={faBriefcase}/> RESUME</Nav.Link>
              <Nav.Link href="#portfolio"><FontAwesomeIcon icon={faPuzzlePiece}/> PORTFOLIO</Nav.Link>
              <Nav.Link href="#contact"><FontAwesomeIcon icon={faAddressCard}/> CONTACT ME</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={anh1}
              alt="First slide"
            />
            <Carousel.Caption>
              <img src={avatar} width="200vh"/>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={anh1}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={anh1}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Menu;