import React, { useEffect, useState } from "react";
import Card from "./card/Card";
import Category from "./category/Category";
//scss
import './Main.scss'
import Search from "./search/Search";
import obj from '../../Books/Books.js'

export default function Main() {
  const [newObj, setNewObj] = useState([]);

  useEffect(() => {
    setNewObj(obj)
  },[])

  return(
    <>
    <main id="#main">
      <div className="conatiner">
        <section className="main d-flex flex-column align-items-center">
          <Search
            obj={obj}
            newObj={newObj}
            setNewObj={setNewObj}
          />
          <h2 className="main__title">Asosiy kategoriyalar</h2>
          <Category
            obj={obj}
            newObj={newObj}
            setNewObj={setNewObj}
          />
          <Card newObj={newObj}/>
        </section>
      </div>
    </main>
    </>
  )
}