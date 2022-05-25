import React from "react";
import './Writers.scss'

import { Link, useLocation } from "react-router-dom";
import obj from "../../Books/Books"

import imgs from '../../assets/images/object/qodiriy.jpg'

export default function Users() {
  let location = useLocation();

  return(
    <section className="writers">
      <div className="container">
        {
          obj.map((item, key) => {
            if(item.id === location.pathname.split("/").at(-1)) {
              return(
                <div key={key+98} className="writers__main d-flex justify-content-between">
                  <div className="writers__leftbox">
                    <div className="writers__imgbox">
                      <img className="writers__img" src={item.img} alt={item.name} />
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="">
                        <p className="writers__born">Tavallud sanasi</p>
                        <p className="writers__birth">{item.bornDate}-{item.bornMonth} {item.born}</p>
                        <p className="writers__born">{item.location}</p>
                      </div>
                      <span className="writers__birth">-</span>
                      <div className="">
                        <p className="writers__born">Tavallud sanasi</p>
                        <p className="writers__birth">{item.diedDate}-{item.diedMonth} {item.died}</p>
                        <p className="writers__born">{item.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="writers__infobox">
                    <h2 className="writers__title">{item.name} {item.lastName}</h2>
                    <p className="writers__desc">{item.desc}</p>
                    <h3 className="writers__creation"><i className="bx bxs-bookmark writers__bookmark"></i> Ijod</h3>
                    <p className="writers__creation-text">{item.jobs}</p>
                    <div className="writers__worksbox d-flex justify-content-between align-items-center">
                      <h3 className="writers__work">Asarlari</h3>
                      <a className="writers__workall" href="/">Barchasini ko'rish</a>
                    </div>
                    <ul className="writers__work-list d-flex justify-content-between">
                      {
                        item.bookObj.map((book, keyd) => {
                          return(
                            <Link key={keyd+888} to={`/Books/${book.bookId}`}>
                            <li key={keyd+23} className="writers__work-item">
                            <div className="writers__work-imgbox">
                              <img className="writers__work-img" src={book.bookImg} alt="" />
                            </div>
                            <h3 className="writers__work-name">{book.bookName}</h3>
                            <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> {book.bookRating} • 3400 ta fikrlar</p>
                          </li>
                            </Link>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>
              )
            }
          })
        }
      </div>
    </section>
  )
}

{/* <li className="writers__work-item">
                        <div className="writers__work-imgbox">
                          <img className="writers__work-img" src={imgs} alt="" />
                        </div>
                        <h3 className="writers__work-name">Dunyo ishlari</h3>
                        <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 4.1 • 3400 ta fikrlar</p>
                      </li>
                      <li className="writers__work-item">
                        <div className="writers__work-imgbox">
                          <img className="writers__work-img" src={imgs} alt="" />
                        </div>
                        <h3 className="writers__work-name">Dunyo ishlari</h3>
                        <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 4.1 • 3400 ta fikrlar</p>
                      </li>
                      <li className="writers__work-item">
                        <div className="writers__work-imgbox">
                          <img className="writers__work-img" src={imgs} alt="" />
                        </div>
                        <h3 className="writers__work-name">Dunyo ishlari</h3>
                        <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 4.1 • 3400 ta fikrlar</p>
                      </li>
                      <li className="writers__work-item">
                        <div className="writers__work-imgbox">
                          <img className="writers__work-img" src={imgs} alt="" />
                        </div>
                        <h3 className="writers__work-name">Dunyo ishlari</h3>
                        <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 4.1 • 3400 ta fikrlar</p>
                      </li>
                      <li className="writers__work-item">
                        <div className="writers__work-imgbox">
                          <img className="writers__work-img" src={imgs} alt="" />
                        </div>
                        <h3 className="writers__work-name">Dunyo ishlari</h3>
                        <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> 4.1 • 3400 ta fikrlar</p>
                      </li> */}