import React from "react";
import './Search.scss'
import searchicon from '../../../assets/images/search-icon.svg'

export default function Search(props) {
  const values = []

  const searchHandler = (e) => {
    props.obj.map(item => {
      if(item.name.toLowerCase().includes(e.target.value.toLowerCase())){
        values.push(item)
      }
    })
    props.setNewObj(values)
  }
  return(
    <div className="search d-flex flex-column align-items-center">
      <h2 className="search__title">Qidirsh</h2>
      <form className="serach__form d-flex align-items-center" action="">
        <input onChange={searchHandler} className="search__input" type="text" placeholder="Adiblar, kitoblar, audiolar, maqolalar..." />
        <button className="search__btn"> <img src={searchicon} alt="search-icon" /> Izlash</button>
      </form>

    </div>
  )
}