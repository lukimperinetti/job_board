import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const [loginError, setLoginError] = useState(''); // État pour gérer les erreurs de connexion
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === 'loginEmail' || name === 'loginPassword') {
      setLoginError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Données à envoyer à l'API
    const data = {
      email: formData.loginEmail,
      password: formData.loginPassword,
    };

    // Effectuer une requête Axios pour se connecter
    axios
      .post('http://localhost:3000/api/users/login', data)
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          localStorage.setItem('token', token);
          console.log('Connexion réussie :', response.data);
          // Redirigez l'utilisateur vers la page d'accueil ou toute autre page après la connexion
          if (localStorage.getItem('token')) {
            // Rediriger l'utilisateur vers la page /jobs
            navigate('/jobs');
          }
        
        } else {
          setLoginError('Les informations de connexion sont incorrectes. Veuillez réessayer.');
        }
      })
      .catch((error) => {
        if (error.response) {
          setLoginError('Les informations de connexion sont incorrectes. Veuillez réessayer.');
        } else {
          console.error('Erreur de configuration de la requête:', error.message);
        }
      });

      //if token in localstorage -> redirige sur /jobs 

  };

  return (
    <div className="box2">
      <div className="forms form__login" style={{ width: '450px' }}>
        <h2>Login</h2>

        <form className="form2" id="loginForm" style={{ height: '300px' }} onSubmit={handleSubmit}>
          <div className="log__email log__box">
            <input
              type="email"
              className="login__email input-style"
              placeholder="Email Address"
              onChange={handleChange}
              required
              id="loginEmail"
              name="loginEmail"
            />
            <ion-icon className="i" name="mail-outline"></ion-icon>
          </div>
          <div className="log__pass log__box">
            <input
              type="password"
              className="login__pass input-style"
              placeholder="Password"
              required
              id="loginPassword"
              name="loginPassword"
              onChange={handleChange}
            />
            <ion-icon className="i" name="lock-closed-outline"></ion-icon>
          </div>
          {loginError && (
            <div className="error-message" style={{ color: 'red', fontSize: '12px' }}>
              {loginError}
            </div>
          )}
          {/* {token && (
            <Link to="/">
              <button className="login-btn" type="submit" id="loginBtn">
                Login
              </button>
            </Link>
          )} */}

          <button className="login-btn" type="submit" id="loginBtn">
            Login
          </button> 
          <div className="form__text">
            <p style={{ width: '300px' }}>
              {' '}
              <strong>Don't have an account?</strong>
            </p>
            <Link to="/signup">
              <a className="form__signup--link">
                <strong>Sign Up Now</strong>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;