import React from "react";
import { useState } from "react";
import './Header.scss'
import havatar from '../../assets/images/header-avatar.jpg'
import { Link, NavLink, useLocation } from "react-router-dom";
import dataobj from "../../Books/Books"
const navbar = ["Bosh sahifa", "Nasr", "Nazm", "Maqolalar", "Forum"];


function Header() {
  let location = useLocation() 
  let [isClicked, setClick] = useState(false)
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
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasRightLabel">Saving books</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            {dataobj.map((item, k) => {
          return(
            item.bookObj.map((book, keys) => {
              if(book.bookId === location.pathname.split('/').at(-1)){
                return(
                  <div key={keys+66} className="bookinfo__main d-flex justify-content-between">
                  <div className="bookinfo__imgbox">
                    <img className="bookinfo__img" src={book.bookImg} alt="" />
                  </div>
                  <div className="bookinfo__rightbox">
                    <h2 className="bookinfo__title">{book.bookName}</h2>
                    <div className="bookinfo__avtor d-flex">
                    <Link className="bookinfo__link" to={`/Users/${item.id}`}>{item.name} {item.lastName}</Link> | <p className="writers__work-comment bookinfo__pad"><i className='bx bxs-star bookinfo__pad'></i> {book.bookRating} </p>
                    </div>
                    <p className="bookinfo__info">Sahifalar soni: <span className="bookinfo__span">{book.bookPage}</span></p>
                    <p className="bookinfo__info">Chop etilgan: <span className="bookinfo__span">{book.published}</span></p>
                    <p className="bookinfo__info">Janri: <span className="bookinfo__span">{book.bookGenre}</span></p>
                    <p className="bookinfo__info">Nashriyot <span className="bookinfo__span">{book.nashriyot}</span></p>

                    <div className="bookinfo__descbox" id="accordionExample">
                      <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="bookinfo__descbtn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          To'liq malumot
                          <i className="bx fs-5 text-white ms-2 bx-down-arrow-alt" />
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="bookinfo__desc accordion-body pb-3 ps-0">
                          {book.bookInfoTwo}
                        </div>
                      </div>
                    </div>
                    </div>
                    <h3 className='bookinfo__format'>Mavjud formatlar</h3>
                    <ul className='d-flex bookinfo__list justify-content-between align-items-center'>
                      <li className='text-center bookinfo__item'>
                        <i className='bx bxs-book-alt bookinfo__icon'></i>
                        <p className='mb-2'>Qog'oz kitob</p>
                        <span>{book.bookPrice}</span>
                      </li>

                      <li className='text-center bookinfo__item'>
                        <i className='bx bx-headphone bookinfo__icon'></i>
                        <p className='mb-2'>Audiokitob</p>
                        <span>{book.audioTime}</span>
                      </li>

                      <li className='text-center bookinfo__item'>
                        <i className='bx bx-mobile-alt bookinfo__icon'></i>
                        <p className='mb-2'>Elektron</p>
                        <span>{book.electron}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                )
              }
            })
          )
        })}
            </div>
          </div>
      </div>
    </header>
  )
}
export default Header