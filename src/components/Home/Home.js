import React,{useState} from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressCard } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import anh1 from '../../image/coffee-apple.jpg';
import avatar from '../../image/Circle_LTC_AVT.png';
import {Carousel, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
function Menu(props) {
//   const [lang, setLang] = useState('en');
  const { t, i18n } = useTranslation();
//   React.useEffect(() => {
//     i18n.changeLanguage(lang);
//     console.log('Changed!');
//     return () => {
//       i18n.changeLanguage(lang);
//       console.log('unmount!');
//     };
//   }, [lang,i18n]); 
  // giá trị mà đã được đồng ý thực thi

//   function handleChangeSelect(event){
//     setLang(event.target.value);
//     i18n.changeLanguage(event.target.value)
//   }
  return (
    <div>
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
                <FontAwesomeIcon icon={faAddressCard} size="1x" />{" "} 
                {t('menu.contactme')} {/* CONTACT ME button*/}
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