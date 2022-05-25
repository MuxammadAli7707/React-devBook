import React from "react";
import './Header.scss'
import havatar from '../../assets/images/header-avatar.jpg'
import { Link, NavLink } from "react-router-dom";
const navbar = ["Bosh sahifa", "Nasr", "Nazm", "Maqolalar", "Forum"];


function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="header__logobox">
            <Link to="/" className="header__logo">Badiiyat</Link>  
          </div>

          <nav className="header__nav d-flex align-items-center">
            <ul className="header__list d-flex justify-content-between align-items-center">
              {navbar.map((nav, i) => {
                return (
                  <>
                    <li className="header__item" key={i}>
                      {nav === "Bosh sahifa" ? (
                        <NavLink to={"/"} className='header__link'>
                          {nav}
                        </NavLink>
                      ) : (
                        <NavLink
                        to={nav}
                        className={'header__link'}
                      >
                        {nav}
                      </NavLink>
                      )}

                    </li>
                  </>
                )
              })}
            </ul>
          <div className="header__usersbox d-flex justify-content-between align-items-center">
            <button className="header__btn"><img src={havatar} alt="avatar" /></button>
            <button className="header__btndown"><i className='bx bx-chevron-down header__icondown'></i></button>
          </div>
          </nav>

        </div>
      </div>
    </header>
  )
}
export default Header