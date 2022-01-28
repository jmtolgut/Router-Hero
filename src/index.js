import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { HeroesApp } from './HeroesApp';
import './index.css'
import '../node_modules/animate.css/animate.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(
  <BrowserRouter>
    <HeroesApp />
  </BrowserRouter>,
  document.getElementById('root')
);


