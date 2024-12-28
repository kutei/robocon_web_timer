import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css';
import ConvApp from './pages/ConvApp';
import ConvCurrent from './pages/ConvCurrent';
import ConvStage from './pages/ConvStage';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AdminEdit from './pages/AdminEdit';
import Top from './pages/top/Top';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/:conv_id" element={<ConvApp />} />
        <Route path="/:conv_id/current" element={<ConvCurrent />} />
        <Route path="/:conv_id/:stage_id" element={<ConvStage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/edit" element={<AdminEdit />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
