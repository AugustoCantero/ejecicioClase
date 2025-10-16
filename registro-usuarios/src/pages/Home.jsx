import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ textAlign: 'center', marginTop: '40px' }}>
    <h1>Bienvenido al Sistema de Registro</h1>
    <p>Para comenzar, hacé clic en el botón de abajo.</p>
    <Link to="/register/personal">
      <button>Comenzar Registro</button>
    </Link>
  </div>
);

export default Home;