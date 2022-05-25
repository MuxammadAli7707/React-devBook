import React from "react";
import './Card.scss'
import {Link} from "react-router-dom";


export default function CardBooks(props) {
  return(
    <ul className="cardBook cards d-flex">
      {
        props.newObj.map((item, key) => {
          return(
            item.bookObj.map((book, key) => {
              return(
                <Link className="cards__link" key={key+65} to={`/Books/${book.bookId}`}>
                  <li className="cardBook__item">
                    <div className="cardBook__imgbox">
                      <img className="cardBook__img" src={book.bookImg} alt={book.name} />
                    </div>
                    <div className="cardBook__box d-flex flex-column">
                      <h3 className="cardBook__title">{book.bookName}</h3>
                      <p className="cardBook__name">{item.name} {item.lastName}</p>
                      <p className="writers__work-comment"><i className='bx bxs-star writers__stars'></i> {book.bookRating} • 3400 ta fikrlar</p>
                    </div>
                  </li>
            </Link>
              )
            }))
        })
      }
    </ul>
  )
}