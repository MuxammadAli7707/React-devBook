import React from "react";
import { Link, useLocation } from "react-router-dom";

import './BookInfo.scss'
import dataobj from "../../Books/Books"

export default function BooksInfo() {
  let location = useLocation() 
  return(
    <section className="bookinfo">  
      <div className="container">
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

                      <li>
                        <button className="bookinfo__btn">Javonga qo’shish</button>
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
    </section>

  )
}



{/* <div className="bookinfo__main d-flex justify-content-between">
          <div className="bookinfo__imgbox">
            <img className="bookinfo__img" src={imgb} alt="" />
          </div>
          <div className="bookinfo__rightbox">
            <h2 className="bookinfo__title">Qorqma</h2>
            <div className="bookinfo__avtor d-flex">
            <Link className="bookinfo__link" to="#">Javlon Jovliyev</Link> | <p className="writers__work-comment bookinfo__pad"><i className='bx bxs-star bookinfo__pad'></i> 4.1 </p>
            </div>
            <p className="bookinfo__info">Sahifalar soni: <span className="bookinfo__span">555</span></p>
            <p className="bookinfo__info">Chop etilgan: <span className="bookinfo__span">2021</span></p>
            <p className="bookinfo__info">Janri: <span className="bookinfo__span">Tarixiy</span></p>
            <p className="bookinfo__info">Nashriyot <span className="bookinfo__span">Nihol nashr</span></p>

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
                Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат йигит-қизларининг  хотирасига бағишланади.

                Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.
                </div>
              </div>
            </div>
            </div>
            <h3 className='bookinfo__format'>Mavjud formatlar</h3>
            <ul className='d-flex bookinfo__list justify-content-between align-items-center'>
              <li className='text-center bookinfo__item'>
                <i className='bx bxs-book-alt bookinfo__icon'></i>
                <p className='mb-2'>Qog'oz kitob</p>
                <span>5555 so'm</span>
              </li>

              <li className='text-center bookinfo__item'>
                <i className='bx bx-headphone bookinfo__icon'></i>
                <p className='mb-2'>Audiokitob</p>
                <span>565 soat</span>
              </li>

              <li className='text-center bookinfo__item'>
                <i className='bx bx-mobile-alt bookinfo__icon'></i>
                <p className='mb-2'>Elektron</p>
                <span>pdf, epub</span>
              </li>

              <li>
                <button className="bookinfo__btn">Javonga qo’shish</button>
              </li>
            </ul>
          </div>
        </div> */}