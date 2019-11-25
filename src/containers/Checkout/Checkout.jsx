/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { encode } from 'base-64';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { loginRequest } from '../../actions';
import './Checkout.scss';
import { HOST } from '../../../config';

const Checkout = (props) => {
  const [user, setUser] = useState({
    userActive: props.userActive,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, address, phone } = user;
    if (e.target.name === 'login') {
      fetch(`${HOST}/auth/sign-in`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${encode(`${email}:${password}`)}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.user) {
            props.loginRequest(response.user);
            props.history.push('/');
          } else {
            // Implementar aviso de acceso no autorizado
          }
        })
        // Implementar error en la conexión
        .catch((err) => console.log(err));
    } else {
      if (password === confirmPassword) {
        const data = {
          name,
          email,
          password,
          address,
          phone,
        };
        fetch(`${HOST}/auth/sign-up`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        })
          .then((res) => res.json())
          .then((response) => {
            const today = new Date();
            if (response.data) {
              props.loginRequest({
                ...response.data,
                name,
                email,
                address,
                phone,
                createdAt: today,
              });
              props.history.push('/');
            } else if (response.message === 'This email already exists') {
              // Implementar aviso para decir que este usuario ya existe
            }
          })
          // Implementar error en la conexión
          .catch((err) => console.log(err));
      } else {
        // Implementar aviso de que las contraseñas no coinciden
      }
    }
  };
  const handleRegister = (e) => {
    if (e.target.name === 'policy') {
      setUser({
        ...user,
        policy: e.target.checked,
      });
    } else {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <section className='checkout'>
      <Container>
        <Row>
          <Col xs={12} md={7}>
            <div className='checkout__forms'>
              <div className='checkout__form--data'>
                <button type='button' className='button-form'>1. Datos</button>
                <div className='content'>
                  <p>Debes registrarte primero antes de terminar tu compra.</p>
                  <form name='register' onSubmit={handleSubmit}>
                    <label htmlFor='name-register'>Nombre</label>
                    <input type='text' name='name' id='name-register' placeholder='Escribe tu Nombre' onChange={(e) => handleRegister(e)} required />
                    <label htmlFor='email-register'>Correo electrónico</label>
                    <input type='email' name='email' id='email-register' placeholder='Escribe tu correo electrónico' onChange={(e) => handleRegister(e)} required />
                    <label htmlFor='address-register'>Direccion</label>
                    <input type='text' name='address' id='address-register' placeholder='Escribe tu direccion' onChange={(e) => handleRegister(e)} required />
                    <label htmlFor='phone-register'>Telefono</label>
                    <input type='tel' name='phone' id='phone-register' placeholder='Escribe tu telefono' onChange={(e) => handleRegister(e)} required />
                    <label htmlFor='password-register'>Contraseña</label>
                    <input type='password' name='password' id='password-register' placeholder='Escribe tu contraseña' onChange={(e) => handleRegister(e)} required />
                    <label htmlFor='confirm-password'>Confirma tu contraseña</label>
                    <input type='password' name='confirmPassword' id='confirm-password' placeholder='Escribe tu contraseña' onChange={(e) => handleRegister(e)} required />
                    <div className='policy'>
                      <input type='checkbox' name='policy' id='policy' onChange={(e) => handleRegister(e)} required />
                      <label htmlFor='policy'>Acepto la politica de privacidad</label>
                    </div>
                    <input type='submit' value='Continuar con la compra' />
                  </form>
                </div>
                <button type='button' className='button-form'>2. Metodo de pago</button>
                <div className={`content ${user.userActive ? 'active' : 'unlogged'}`}>
                  <form name='checkout'>
                    <label htmlFor=''>Seleccione un metodo de pago</label>
                    <select name='cars' size='3'>
                      <option value='volvo'>Volvo</option>
                      <option value='saab'>Saab</option>
                      <option value='fiat'>Fiat</option>
                      <option value='audi'>Audi</option>
                    </select>
                    <input type='submit' value='Finalizar compra' />
                  </form>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className='checkout__summary'>
              <div className='top-summary'>
                <h2 className='heading'>en el carrito</h2>
                <a href='#' className='edit-btn'>Editar</a>
              </div>
              <ul className='summary'>
                <li className='listItem'>
                  <h3 className='value'>Subtotal:</h3>
                  <span className='price'>$0</span>
                </li>
                <li className='listItem'>
                  <h3 className='value'>Impuestos</h3>
                  <span className='price'>$0</span>
                </li>
                <li className='listItem'>
                  <h3 className='value'>Total</h3>
                  <span className='price'>$0</span>
                </li>
              </ul>
              <ul className='product-list'>
                <li className='product'>
                  <img src='' />
                  <div className='content'>
                    <h5 className='name'>Name product</h5>
                    <p className='price'>0</p>
                    <div className='size'>Talla: M</div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};
const mapDispatchToProps = {
  loginRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
