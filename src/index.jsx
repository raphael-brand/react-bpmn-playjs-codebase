import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom';

import App from "./App.jsx";

render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
  document.getElementById('root')
);
