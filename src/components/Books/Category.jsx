import React, { useEffect, useState } from "react";
import '../main/category/Category.scss'

let category = [
  {
    id: "temuriylar",
    name: "Temuriylar davri",
    class: false
  },
  {
    id: "jadid",
    name: "Jadid adabiyoti",
    class: true
  },
  {
    id: "sovet",
    name: "Sovet davri",
    class: false
  },
  {
    id: "mustaqillik",
    name: "Mustaqillik davri",
    class: false
  },
]

export default function CateBooks(props) {
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
      return item.category === e.target.id
      console.log("ishladi")
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