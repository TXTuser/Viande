import React from "react";
import cl from "../header/Header.module.css";
import { NavLink } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className={cl.header}>
        <div className={cl.container}>
          <NavLink to="/menu" className={cl.menuLink}>
            Меню
          </NavLink>
          <div className={cl.headerRightSide}>
            <p>Ул. Пушкина Д. 2</p>
            <a href="tel:+73518211689">+7 (351) 821 16-89</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
