import React, { useEffect, useState } from "react";
import './Category.scss'

let category = [
  {
    id: "barchasi",
    name: "Barchasi",
    class: true
  },

  {
    id: "biznes",
    name: "Biznes",
    class: false
  },
  {
    id: "uzbek",
    name: "O'zbek adabiyoti",
    class: false
  },
  {
    id: "Diniy",
    name: "Diniy",
    class: false
  },
  {
    id: "jahon",
    name: "Jahon",
    class: false
  },
]

export default function Category(props) {
  const [cate, setCate] = useState([])
  let cates = []
  useEffect(() => {
    setCate(category)
  }, [])

  let btnClick = (e) => {
    cate.map(item => {
      if(e.target.id === item.id) {
        item.class = true
        cates.push(item)
      }
      else {
        item.class = false
        cates.push(item)
      }
    })
    setCate(cates)

    props.setNewObj(props.obj.filter(item => {
      if(e.target.id === 'barchasi'){
        return item
      }

      return item.genre === e.target.id
    }))

  }

  return(
    <ul className="category d-flex">
      {category.map((item, key) => (
        <li key={key+97} className="category__item">
          <button onClick={btnClick} id={item.id} className={`category__btn ${item.class ? 'category__activ': ''}`}>{item.name}</button>
        </li>
      ))}
    </ul>
  )
}