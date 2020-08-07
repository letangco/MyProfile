import React from 'react';
import './css/menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserTie, faBriefcase, faPuzzlePiece, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import anh1 from '../../image/coffee-apple.jpg';
import avatar from '../../image/Circle_LTC_AVT.png';
import { Nav, Navbar, Carousel, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import 'antd/dist/antd.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
function Menu() {

  const { t, i18n } = useTranslation();
  function handleChangeLanguageItem(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div>
      <Navbar expand="md" className="fixed-top">
        <Navbar.Brand href="#home">LE TANG CO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Button variant="primary" size="sm" onClick={() => handleChangeLanguageItem('en')}>
          English
  </Button>
        <Button variant="primary" size="sm" onClick={() => handleChangeLanguageItem('ko')}>
          Korea
  </Button>
        <Button variant="primary" size="sm" onClick={() => handleChangeLanguageItem('chi')}>
          China
  </Button>
        <Button variant="primary" size="sm" onClick={() => handleChangeLanguageItem('vn')}>
          Viet Nam
  </Button>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><FontAwesomeIcon icon={faHome} /> {t('menu.home')}</Nav.Link>
            <Nav.Link href="#about"><FontAwesomeIcon icon={faUserTie} /> {t('menu.aboutme')}</Nav.Link>
            <Nav.Link href="#resume"><FontAwesomeIcon icon={faBriefcase} /> {t('menu.resume')}</Nav.Link>
            <Nav.Link href="#portfolio"><FontAwesomeIcon icon={faPuzzlePiece} /> {t('menu.portfolio')}</Nav.Link>
            <Nav.Link href="#contact"><FontAwesomeIcon icon={faAddressCard} /> {t('menu.contactme')}</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <FormControl className="SelectBoxCountry">
          <InputLabel id="demo-simple-select-label">Choose your country...</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value="en"
            onChange={() => handleChangeLanguageItem('vn')}
          >
            <MenuItem value="en" className="select-choose-country">
              <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/gb.svg" alt="Flag" width="55px" height="40px" />&nbsp; English
                </MenuItem>
            <MenuItem value="chi" className="select-choose-country">
              <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/cn.svg" alt="Flag" width="55px" height="40px" />&nbsp; China
                </MenuItem>
            <MenuItem value="ko" className="select-choose-country">
              <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/kr.svg" alt="Flag" width="55px" height="40px" />&nbsp; Korea
                </MenuItem>
            <MenuItem value="vn" className="select-choose-country">
              <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/vn.svg" alt="Flag" width="55px" height="40px" />&nbsp; Viet Nam
                </MenuItem>
          </Select>
        </FormControl>




      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={anh1}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="contentCaption">
              <img src={avatar} width="200px" alt="avt" />
              <h3>{t('FirstCaption.hello')}</h3>
              <p>{t('FirstCaption.location')}</p>
              <Button variant="danger" shape="round" size="lg">
                <FontAwesomeIcon icon={faAddressCard} size="1x" />{" "} CONTACT ME
                </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={anh1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className="contentCaption">
              <img src={avatar} width="200px" alt="avt" />
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={anh1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="contentCaption">
              <img src={avatar} width="200px" alt="avt" />
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Menu;