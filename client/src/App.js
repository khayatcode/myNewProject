import React,{ useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Main from './view/Main';
import Detail from "./components/Detail"
import Update from './components/Update';
// import PersonForm from './components/PersonForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/"/>
          <Route element={<Detail/>} path="/people/:id" />
          <Route element={<Update/>} path="/people/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
