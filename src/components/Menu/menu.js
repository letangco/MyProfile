import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserTie, faBriefcase, faPuzzlePiece, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Carousel, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
// import 'antd/dist/antd.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Home from '../Home/Home';
import About from '../AboutMe/About';
function Menu(props) {
  const theme = createMuiTheme({
    palette: {
      type: "light",
    }
  });
  const [lang, setLang] = useState('en');
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(lang);
    console.log('Changed!');
    return () => {
      i18n.changeLanguage(lang);
      console.log('unmount!');
    };
  }, [lang, i18n]); // giá trị mà đã được đồng ý thực thi

  function handleChangeSelect(event) {
    setLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  }
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <Navbar expand="md" className="fixed-top">
            <Navbar.Brand href="#home">LE TANG CO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>
                  <NavLink to="/">
                    <FontAwesomeIcon icon={faHome} /> {t('menu.home')}
                  </NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink exact to="/about">
                    <FontAwesomeIcon icon={faUserTie} /> {t('menu.aboutme')}
                  </NavLink>
                </Nav.Link>
                <Nav.Link href="#resume"><FontAwesomeIcon icon={faBriefcase} /> {t('menu.resume')}</Nav.Link>
                <Nav.Link href="#portfolio"><FontAwesomeIcon icon={faPuzzlePiece} /> {t('menu.portfolio')}</Nav.Link>
                <Nav.Link href="#contact"><FontAwesomeIcon icon={faAddressCard} /> {t('menu.contactme')}</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            <FormControl className="SelectBoxCountry">
              <InputLabel id="demo-simple-select-label">Choose your country...</InputLabel>

              <Select
                value={lang}
                onChange={handleChangeSelect}
              >
                <MenuItem value="en">
                  <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/gb.svg" alt="Flag" width="55px" height="40px" />&nbsp; English
                </MenuItem>
                <MenuItem value="chi">
                  <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/cn.svg" alt="Flag" width="55px" height="40px" />&nbsp; China
                </MenuItem>
                <MenuItem value="ko">
                  <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/kr.svg" alt="Flag" width="55px" height="40px" />&nbsp; Korea
                </MenuItem>
                <MenuItem value="vn">
                  <img src="https://cdn.jsdelivr.net/gh/hjnilsson/country-flags@latest/svg/vn.svg" alt="Flag" width="55px" height="40px" />&nbsp; Viet Nam
                </MenuItem>
              </Select>
            </FormControl>
          </Navbar>
        </ThemeProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default Menu;