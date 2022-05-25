import React from "react";
import './Card.scss'
import {Link} from "react-router-dom";


export default function Card(props) {
  return(
    <ul className="cards d-flex">
      {
        props.newObj.map((item, key) => {
          if(key < 60) {
            return(
            <Link className="cards__link" key={key+65} to={`Users/${item.id}`}>
              <li className="cards__item">
                <div className="cards__imgbox">
                  <img className="cards__img" src={item.img} alt={item.name} />
                </div>
                <div className="cards__box d-flex flex-column align-items-center">
                  <h3 className="cards__title">{item.name} {item.lastName}</h3>
                  <p className="cards__year">{item.born}-{item.died}</p>

                  <div className="cards__seenbox d-flex justify-content-between align-items-center">
                    <p className="cards__seen"><i className='bx bxs-book-alt cards__book'></i>34</p>
                    <p className="cards__seen"><i className='bx bx-headphone cards__hphone'></i> 13</p>
                  </div>
                </div>
              </li>
            </Link>
          )
        }})
      }
    </ul>
  )
}