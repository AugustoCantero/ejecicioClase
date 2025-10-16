import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/register/Register';
import PersonalInfo from './components/register/PersonalInfo';
import ContactInfo from './components/register/ContactInfo';
import Confirmation from './components/register/Confirmation';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
          <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />}>
            <Route path="personal" element={<PersonalInfo />} />
            <Route path="contact" element={<ContactInfo />} />
            <Route path="confirmation" element={<Confirmation />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
