import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Email no valido');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (valid) {
      navigate("/catalogo");
      console.log('Logged in:', { email, password });
    }
  };

  return (
    <div className="bg-secondary">
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title text-center mb-4">Iniciar Sesión</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mt-3">
                    <label htmlFor="email">Email o Correo Electronico</label>
                    <input id="email" type="text" ref={emailRef} className="form-control" />
                    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                  </div>
                  <div className="form-group mt-3">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" ref={passwordRef} className="form-control" />
                    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
                  </div>
                  <div className="gap-2 mt-3">
                    <button type="submit" className="btn btn-primary btn-block">
                      Iniciar Sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
