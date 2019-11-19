import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { registerRequest, loginRequest } from '../../actions';
import mainLogo from '../../assets/static/secondary-logo.png';
import background from '../../assets/static/temp/slide-1.jpg';
import './Login.scss';

const Login = (props) => {
  const [userState, setUserState] = useState({
    register: false,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    policy: false,
  });
  const handleForm = (e) => {
    if (!e.target.classList.contains('active')) {
      e.target.parentElement.querySelector('.active').classList.remove('active');
      e.target.classList.add('active');
      setUserState({
        ...userState,
        register: !userState.register,
      });
      if (e.target.dataset.form === 'register') {
        setUserState({
          ...userState,
          register: !userState.register,
        });
      };
    };
  };
  const handleRegister = (e) => {
    if (e.target.name === 'policy') {
      setUserState({
        ...userState,
        policy: e.target.checked,
      });
    } else {
      setUserState({
        ...userState,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.name === 'login') {
      props.users.filter((key) => {
        if (key.email === userState.email && key.password === userState.password) {
          props.loginRequest(key.id);
          props.history.push('/');
        } else {
          alert('No te encuentras registrado');
        }
      });
    } else {
      props.registerRequest({
        id: props.users.length,
        name: userState.name,
        email: userState.email,
        password: userState.password,
      });
      props.history.push('/');
    }
  };
  return (
    <section className='LogInOut'>
      <Container fluid>
        <Row className='LogInOut__header'>
          <Col>
            <div className='LogInOut__header--content'>
              <figure className='logo'><img src={mainLogo} alt='' /></figure>
              <Link to='/' className='comeback'>
                <i className='icon-arrow-left' />
                Volver atras
              </Link>
            </div>
          </Col>
        </Row>
        <Row className='LogInOut__content'>
          <Col xs={12} sm={6} className='LogInOut__content--backgroundBox'>
            <img src={background} alt='background image world fit' />
          </Col>
          <Col xs={12} sm={6} className='LogInOut__content--formBox'>
            <div className='LogInOut__content--switchForm'>
              <button type='button' data-form='register' onClick={(e) => handleForm(e)}>Registrarse</button>
              <span className='divider'>|</span>
              <button type='button' data-form='login' onClick={(e) => handleForm(e)} className='active'>Iniciar Sesion</button>
            </div>
            <div className='LogInOut__content--form'>
              {!userState.register ? (
                <form name='login' onSubmit={handleSubmit}>
                  <label htmlFor='email-login'>Correo electrónico</label>
                  <input type='email' name='email' id='email-login' placeholder='Escribe tu correo electrónico' onChange={handleRegister} />
                  <label htmlFor=''>Contraseña</label>
                  <input type='password' name='password' id='' placeholder='Escribe tu contraseña' onChange={handleRegister} />
                  <input type='submit' value='Iniciar sesión' />
                  <a href='' className='fotget'>Olvide mi contaseña</a>
                </form>
              ) :
                (
                  <form name='register' onSubmit={handleSubmit}>
                    <label htmlFor='name-register'>Nombre</label>
                    <input type='text' name='name' id='name-register' placeholder='Escribe tu Nombre' onChange={handleRegister} required />
                    <label htmlFor='email-register'>Correo electrónico</label>
                    <input type='email' name='email' id='email-register' placeholder='Escribe tu correo electrónico' onChange={handleRegister} required />
                    <label htmlFor='password-register'>Contraseña</label>
                    <input type='password' name='password' id='password-register' placeholder='Escribe tu contraseña' onChange={handleRegister} required />
                    <label htmlFor='confirm-password'>Confirma tu contraseña</label>
                    <input type='password' name='confirmPasword' id='confirm-password' placeholder='Escribe tu contraseña' onChange={handleRegister} required />
                    <div className='policy'>
                      <input type='checkbox' name='policy' id='policy' onChange={handleRegister} required />
                      <label htmlFor='policy'>Acepto la politica de privacidad</label>
                    </div>
                    <input type='submit' value='Crear cuenta' />
                  </form>
                )}
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
  registerRequest,
  loginRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
