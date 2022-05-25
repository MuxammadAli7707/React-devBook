import React, { useEffect, useState } from "react";
import '../main/Main.scss'
import Search from "../main/search/Search";
import obj from '../../Books/Books.js'
import Category from "./Category";
import Hero from "../hero/Hero";
import CardBooks from "./Card";

export default function Books() {
  const [newObj, setNewObj] = useState([]);

  useEffect(() => {
    setNewObj(obj)
  },[])

  return(
    <>
    <Hero />
    <main id="#main">
      <div className="conatiner">
        <section className="main d-flex flex-column align-items-center">
          <Search
            obj={obj}
            newObj={newObj}
            setNewObj={setNewObj}
          />
          <h2 className="main__title">Asosiy kategoriyalar</h2>
          <Category newObj={newObj}/>
          <CardBooks newObj={newObj}/>
        </section>
      </div>
    </main>
    </>
  )
}