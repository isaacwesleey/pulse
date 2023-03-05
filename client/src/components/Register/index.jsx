import { useState } from 'react';
import { useToken } from '../../TokenContext';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Register.css';

const Registro = () => {
  const [token, setToken] = useToken();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Validar el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('El correo electrónico no es válido');
      setLoading(false);
      return;
    }

    // Validar la complejidad de la contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial'
      );
      setLoading(false);
      return;
    }
    try {
      const response = await fetch('http://localhost:3005/api/user', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      const body = await response.json();

      if (body.status === 'ok') {
        alert('Usuario registrado correctamente');
        window.location.href = '/';
      } else {
        setError(body.message);
      }
    } catch (error) {
      setError('Ha ocurrido un error al intentar registrar al usuario');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      <div className='registro-container'>
        <h1>Crea tu cuenta</h1>
        {error && <div className='error-message'>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className='container-form'>
            <label htmlFor='name'>Nombre:</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
            <label htmlFor='email'>Correo electrónico:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete='email'
            />
            <label htmlFor='password'>Contraseña:</label>
            <input
              type='password'
              id='password'
              value={password}
              autoComplete='current-password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type='submit' disabled={loading}>
              {loading ? 'Creando cuenta...' : 'Crear cuenta'}
            </button>
            <p>
              Al registrarte, aceptas los Términos de servicio y la Política de
              privacidad, incluida la política de Uso de Cookies.
            </p>
            <p>
              {' '}
              ¿Ya tienes una cuenta? <a href='/login'>Inicia sesión</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
