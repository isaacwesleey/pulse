import { useState } from 'react';
import { useToken } from '../../TokenContext';
import './Login.css';

const Login = () => {
  const [token, setToken] = useToken();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3005/api/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const body = await response.json();

      if (body.status === 'ok') {
        setToken(body.data.token);
        setUserId(body.data.id);
        window.location.href = '/';
      } else {
        setError(body.message);
      }
    } catch (error) {
      setError('Ha ocurrido un error al intentar iniciar sesión' + error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='container'>
      <div className='registro-container'>
        <h1>Inicia sesión en Now</h1>
        {error && <div className='error-message'>{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className='container-form'>
            <label htmlFor='email'>Correo electrónico:</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
              autoComplete='email'
            />
            <label htmlFor='password'>Contraseña:</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete='current-password'
            />
            <button type='submit' disabled={loading}>
              {loading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
            <button type='button'>¿Olvidaste tu contraseña?</button>
            <p>
              {' '}
              ¿No tienes una cuenta? <a href='/register'>Regístrate</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
