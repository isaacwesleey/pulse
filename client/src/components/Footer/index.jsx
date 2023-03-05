import React, { useState, useEffect } from 'react';
import { useToken } from '../../TokenContext';

import Popup from '../Popup';
import Registro from '../Register';
import Login from '../Login';
import Trending from '../Trending';

import './Footer.css';

function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const [token, setToken] = useToken();
  const [user, setUser] = useState({});

  useEffect(() => {
    const userData = async () => {
      try {
        const res = await fetch('http://localhost:3005/api/user', {
          headers: {
            Authorization: token,
          },
        });
        const body = await res.json();

        if (body.status === 'error') {
          alert(body.message);
        } else {
          setUser(body.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (token) userData();
  }, [token]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleRegister = () => {
    setIsRegistering(true);
  };

  const handleLogin = () => {
    setIsRegistering(false);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div className='new-user-container'>
      {token && (
        <div className='new-user'>
          <div className='user'>
            <img src='public/1542361110359.jpeg' alt='user' />
            <p>{user.name}</p>
          </div>
          <button className='btn__home' onClick={handleLogout}>
            Cerrar sesión
          </button>
        </div>
      )}
      {!token && (
        <div className='new-user'>
          <h1>¿Eres nuevo en Now?</h1>
          <p>
            Regístrate ahora para obtener tu propia cronología personalizada.
          </p>
          <button
            className='btn__home'
            onClick={() => {
              handleOpen();
              handleRegister();
            }}
          >
            Crear cuenta
          </button>
          <button
            className='btn__home'
            onClick={() => {
              handleOpen();
              handleLogin();
            }}
          >
            Iniciar sesión
          </button>
          <Popup isOpen={isOpen} onClose={handleClose}>
            {isRegistering ? (
              <Registro onLoginClick={handleLogin} />
            ) : (
              <Login onRegisterClick={handleRegister} />
            )}
          </Popup>
          <p>
            Al registrarte, aceptas los{' '}
            <a href='/login'>Términos de servicio</a> y la{' '}
            <a href='/login'>Política de privacidad</a>, incluida la{' '}
            <a href='/login'>política de Uso de Cookies</a>.
          </p>
        </div>
      )}
      <Trending />
      <div className='footer'>
        <p>© 2021 Now. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;
