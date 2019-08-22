import React from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Mesero from "./Mesero";
import Chef from "../Components/Chef";
//Aqui importamos nuestra imagen
import logo from '../img/logo.png';

const Main = () => {
  return (
    <HashRouter>
      <div>
        <img className="logo" alt="logo_burgerQueen" src={logo} />
        <ul className="header">
          <li><NavLink exact to="/">Menú</NavLink></li>
          <li><NavLink to="/chef">Cocinero</NavLink></li>
          <li><NavLink to="/mesero">Mesero</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route path="/chef" component={Chef} />
          <Route path="/mesero" component={Mesero} />
        </div>
      </div>
    </HashRouter>
  );
}

export default Main;
