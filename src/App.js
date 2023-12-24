import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './view/login';
import novoUsuario from './view/usuario-novo';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' Component={Login}/>
      <Route exact path='/novousuario' Component={novoUsuario}/>
    </Routes>  
    </BrowserRouter>
   
  );
}

export default App;
