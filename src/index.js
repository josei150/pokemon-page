import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { LegendariesPokemons } from './pages/LegendariesPokemons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/legendaries" element={<LegendariesPokemons/>}/>
    </Routes>
  </BrowserRouter>
);
