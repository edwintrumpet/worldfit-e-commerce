import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import './Footer.scss';
import mainLogo from '../../assets/static/main-logo.png';
import paymentLogos from '../../assets/static/payment.jpg';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col xs={12} md={2} className='footer__logo'>
          <figure><img src={mainLogo} alt="" /></figure>
        </Col>
        <Col xs={12} sm={4} md={3} className='footer__about'>
          <h6 className='heading'>Enlaces de interés</h6>
          <ul className="footer_menu">
            <li><a href="#">¿Quiénes somos?</a></li>
            <li><a href="#">Devolución / Garatías / Envíos</a></li>
            <li><a href="#">Comercio minoristas y cooperación</a></li>
            <li><a href="#">Términos y condiciones</a></li>
          </ul>
        </Col>
        <Col xs={12} sm={3} lg={2} className='footer__menu'>
          <h6 className='heading'>Acceso rapido</h6>
          <ul className="footer_menu">
            <li><a href="#">Hombres</a></li>
            <li><a href="#">Mujeres</a></li>
            <li><a href="#">Zapatillas</a></li>
            <li><a href="#">Accesorios</a></li>
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Carrito</a></li>
          </ul>
        </Col>
        <Col xs={12} sm={5} md={4} lg={{span: 3, offset: 2,}} className='footer__contact'>
          <h6 className='heading'>contacto</h6>
          <ul className="footer_menu">
            <li><a href="tel:+573157710312"> <i className='icon-whatsapp'></i> +57 315 771 0312</a></li>
            <li><a href="#"><i className='icon-mail'></i> info@worldfitcolombia.com</a></li>
            <li><a href="#"><i className='icon-facebook'></i> /worldfitcolombia1</a></li>
            <li><a href="#"> <i className='icon-instagram'></i> /worldfitcol</a></li>
          </ul>
        </Col>
      </Row>
      
    </Container>
    <Container fluid className='footer__copyright'>
      <Row>
        <Col xs={12} md={6}>
          <div className="copyright">
            <p>© 2019 Worldfit Colombia. All Rights Reserved.</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="payment">
            <img src={paymentLogos} />
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
