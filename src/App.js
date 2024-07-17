import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Catalogo from "./components/Catalogo/Catalogo";
import { CarroProvider } from './components/CarroContexto/CarroContexto';

function App() {
  return (
    <CarroProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/catalogo" element={<Catalogo />} />
        </Routes>
      </Router>
    </CarroProvider>
  );
}

export default App;
