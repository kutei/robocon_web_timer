import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import RoboconTimer from './components/RoboconTimer/RoboconTimer';

import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RoboconTimer />
  </React.StrictMode>
);


reportWebVitals();
