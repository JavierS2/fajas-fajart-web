import './Navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">

        <div className="navbar__logo">
          <a href="/">Fajart Logo</a>
        </div>

        <ul className="navbar__links links__products">
            <li><a href="/productos/product1">Fajas postquirúrgicas</a></li>
            <li><a href="/productos/product2">Fajas de uso diario</a></li>
            <li><a href="/productos/product3">Fajas para hombre</a></li>
        </ul>

        <ul className="navbar__links links__items">
          <li><a href="/">Nuestros productos</a></li>
          <li><a href="/about">Sobre nosotros</a></li>
          <li><a href="/contact">Contáctanos</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar;

