import React from "react";
import { useState } from "react";
import './Header.scss'
import { Link, NavLink, useLocation } from "react-router-dom";
import dataobj from "../../Books/Books"
const navbar = ["Bosh sahifa", "Nasr", "Nazm", "Maqolalar", "Forum"];


function Header({setWishlist, wishlist}) {
  let location = useLocation() 
  let [isClicked, setClick] = useState(false)

  
  let deleteHandler = (e) => {
    let idd = e.target.id
    setWishlist(wishlist.filter(item => item.bookId !== idd))

  }
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
            <button  onClick={() => setClick(!isClicked)} className="header__btn"><img className="header__userimg" src="https://toppng.com/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png" alt="avatar" /></button>
            <button  onClick={() => setClick(!isClicked)} className="header__btndown"><i className='bx bx-chevron-down header__icondown'></i></button>
          </div>
          </nav>
        </div>
        <div className='header__modal__wrap'>
              <div style={{display: isClicked ? 'block' : 'none'}} className='header__modal'>
                <ul className='list-unstyled header__modal__list p-3 m-0'>
                  <Link to='/users' className='header__modal__item'>
                    <p className='mb-3 d-flex align-items-center'><i class='bx header__user__icon me-2 bxs-user'></i>Profile</p>
                  </Link>
                  <Link to='setting' className='header__modal__item'>
                    <p className='mb-3 d-flex align-items-center'><i class='bx header__user__icon me-2 bxs-cog'></i>Settings</p>
                  </Link>
                  <li type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className='header__modal__item'>
                    <p className='mb-3 d-flex align-items-center'><i class='bx header__user__icon me-2 bxs-bookmark-star'></i>Saved</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Saving books</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <ul className="header__canvas-list flex-column d-flex justify-content-center">
            {
              wishlist.map((book, key) => {
                return(
                  <li key={key+33} className="header__canvas-item d-flex align-items-center">
                  <div className="header__canvas-imgbox">
                    <img className="header__canvas-img" src={book.bookImg} alt="" />
                  </div>
                  <div className="ps-3">
                  <h3 className="header__canvas-name">{book.bookName}</h3>
                  <p className="header__canvas-comment"><i className='bx bxs-star writers__stars star'></i> {book.bookRating}</p>
                  <p className="header__canvas-comment">{book.bookGenre}</p>
                  </div>
                  <button onClick={deleteHandler} id={book.bookId} className="header__canvas-btn">x</button>
                </li>
                )
              })
            }
          </ul>
            {/* <div class="offcanvas-body">
            
            </div> */}
          </div>
      </div>
    </header>
  )
}
export default Header