import React, { useState } from "react";
import './Hero.scss'
import hback from '../../assets/images/hero-back.png'
export default function Hero() {
  const [slideImg, setSlideImg] = useState("first");

  const moveToFirst = () => {
    setSlideImg("first");
  };
  const moveToSecond = () => {
    setSlideImg("second");
  };
  const moveToThird = () => {
    setSlideImg("third");
  };
  const moveToFourth = () => {
    setSlideImg("fourth");
  };
  return (
    <section className="hero">
      <div className="conatiner">
        <div className="hero__main">
          <div className="heros">
            <div className={`${
              slideImg === "first"
              ? "to-firstSlide"
              : slideImg === "second"
              ? "to-secondSlide"
              : slideImg === "third"
              ? "to-thirdSlide"
              : slideImg === "fourth"
              ? "to-fourSlide"
              : slideImg === ""
            } hero__box`}>
              <div className="hero__boxing">
                <img className="hero__img" src={hback} alt="img" />
                <h2 className="hero__title tit">Temuriylar davri adabiyoti</h2>
              </div>

              <div className="hero__boxing">
              <img className="hero__img" src="http://i.imgur.com/ZZq9fQJ.jpg" alt="img" />
                <h2 className="hero__title tit">Abdulla Avloniy Tarixi</h2>
              </div>
              <div className="hero__boxing">
              <img className="hero__img" src="http://i.imgur.com/gn0P3j4.jpg" alt="img" />
                <h2 className="hero__title tit">Abdurauf Fitrat Tarixi</h2>
              </div>

              <div className="hero__boxing">
                <img className="hero__img" src="http://i.imgur.com/LXKj5i2.jpg" alt="img" />
                <h2 className="hero__title tit">Abdulhamid Cho'lpon Tarixi</h2>
              </div>
            </div>
          </div>
          <div className="hero__btns d-flex align-items-center">
            <button
              onClick={moveToFirst}
              className={`hero__btn ${slideImg === "first" ? "active2" : ""}`}
            ></button>
            <button
              onClick={moveToSecond}
              className={`hero__btn ${slideImg === "second" ? "active2" : ""}`}
            ></button>
            <button
              onClick={moveToThird}
              className={`hero__btn ${slideImg === "third" ? "active2" : ""}`}
            ></button>
            <button
              onClick={moveToFourth}
              className={`hero__btn ${slideImg === "fourth" ? "active2" : ""}`}
            ></button>
          </div>
        </div>
      </div>
    </section>
  );
  // const [slideImg, setSlideImg] = useState("first");

  // const moveToFirst = () => {
  //   setSlideImg("first");
  // };
  // const moveToSecond = () => {
  //   setSlideImg("second");
  // };
  // const moveToThird = () => {
  //   setSlideImg("third");
  // };
  // const moveToFourth = () => {
  //   setSlideImg("fourth");
  // };
  // let [px, setPx] = useState("one")

  // const btnHandlerOne = () => {
  //   setPx("one");
  // };
  // const btnHandlerTwo = () => {
  //   setPx("two");
  // };
  // const btnHandlerThree = () => {
  //   setPx("three");
  // };
  // const btnHandlerFour = () => {
  //   setPx("four");
  // };

  // return(
  //   <section className="hero">
  //     <div className="conatiner">
  //       <div className="hero__main">
  //       <ul className="hero__list d-flex">
  //         {
  //           herobtn.map((item, key) => {
  //             return(
  //               <li key={key+89} className="hero__item">
  //                 <div className="hero__main">
  //         <div className="heros">
  //           <div className={`${
  //             slideImg === "first"
  //             ? "to-firstSlide"
  //             : slideImg === "second"
  //             ? "to-secondSlide"
  //             : slideImg === "third"
  //             ? "to-thirdSlide"
  //             : slideImg === "fourth"
  //             ? "to-fourSlide"
  //             : slideImg === ""
  //           } hero__box`}>
  //             <div className="hero__boxing">
  //               <img className="hero__img" src={hback} alt="img" />
  //               <h2 className="hero__title tit">Temuriylar davri adabiyoti</h2>
  //             </div>

  //             <div className="hero__boxing">
  //             <img className="hero__img" src="http://i.imgur.com/ZZq9fQJ.jpg" alt="img" />
  //               <h2 className="hero__title tit">Abdulla Avloniy Tarixi</h2>
  //             </div>
  //             <div className="hero__boxing">
  //             <img className="hero__img" src="http://i.imgur.com/gn0P3j4.jpg" alt="img" />
  //               <h2 className="hero__title tit">Abdurauf Fitrat Tarixi</h2>
  //             </div>

  //             <div className="hero__boxing">
  //               <img className="hero__img" src="http://i.imgur.com/LXKj5i2.jpg" alt="img" />
  //               <h2 className="hero__title tit">Abdulhamid Cho'lpon Tarixi</h2>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="hero__btns d-flex align-items-center">
  //           <button
  //             onClick={moveToFirst}
  //             className={`hero__btn ${slideImg === "first" ? "active2" : ""}`}
  //           ></button>
  //           <button
  //             onClick={moveToSecond}
  //             className={`hero__btn ${slideImg === "second" ? "active2" : ""}`}
  //           ></button>
  //           <button
  //             onClick={moveToThird}
  //             className={`hero__btn ${slideImg === "third" ? "active2" : ""}`}
  //           ></button>
  //           <button
  //             onClick={moveToFourth}
  //             className={`hero__btn ${slideImg === "fourth" ? "active2" : ""}`}
  //           ></button>
  //         </div>
  //       </div>
  //                 <div
  //                 className={`${
  //                   px === "one"
  //                   ? "hero__one"
  //                   : px === "two"
  //                   ? "hero__two"
  //                   : px === "three"
  //                   ? "hero__three"
  //                   : px === "four"
  //                   ? "hero__four"
  //                   : px === ""
  //                 } hero__itembox`}>
  //                   <div className="hero__box">
  //                   <h2 className="hero__title">
  //                     {item.name}
  //                   </h2>
  //                   <div className="d-flex align-items-center">
  //                   <button
  //                     onClick={btnHandlerOne}
  //                     className={`hero__btn ${px === "one" ? "hero__activ" : ""}`}
  //                   ></button>
  //                   <button
  //                     onClick={btnHandlerTwo}
  //                     className={`hero__btn ${px === "two" ? "hero__activ" : ""}`}
  //                   ></button>
  //                   <button
  //                     onClick={btnHandlerThree}
  //                     className={`hero__btn ${px === "three" ? "hero__activ" : ""}`}
  //                   ></button>
  //                   <button
  //                     onClick={btnHandlerFour}
  //                     className={`hero__btn ${px === "four" ? "hero__activ" : ""}`}
  //                   ></button>
  //                   </div>
  //                 </div>
  //               </div>
  //             </li>
  //           )})
  //         }
  //       </ul>
  //     </div>
  //     </div>
  //   </section>
  // )
}
