import React from "react";
import { Link } from "react-router-dom";
import './Sign.scss'
import signup from '../../assets/images/signup.svg'

export default function SignUp() {

  let inputHandler = (e) => {
    console.log(e)
  }

  return(
    <section className="sign">
      <div>
        <div className="sign__main d-flex">
          <div className="sign__imgbox">
            <img className="sign__img" src={signup} alt="" />
          </div>
          <div className="sign__rightbox">
          <Link to="/"><i class='bx bx-home'> Home</i> </Link>
            <div className="sign__box">
              <h2 className="sign__title">Sign up</h2>
              <p className="sign__desc">Already have an account? <Link className="sign__link" to="/signin">Sign in</Link> </p>
              <form action="">
                <label className="sign__label" htmlFor="fristname">
                  <input id="fristname" onChange={inputHandler} className="sign__input" type="text" placeholder="First Name"/>
                </label>
                <label className="sign__label" htmlFor="lastname">
                  <input id="lastname" onChange={inputHandler} className="sign__input" type="text" placeholder="Last name"/>
                </label>
                <label className="sign__label" htmlFor="upphone">
                  <input id="upphone" onChange={inputHandler} className="sign__input" type="text" placeholder="Phone" />
                </label>
                <label className="sign__label" htmlFor="upmail">
                  <input id="upmail" onChange={inputHandler} className="sign__input" type="text" placeholder="Email" />
                </label>
                <label className="sign__label" htmlFor="uppass">
                  <input id="uppass" onChange={inputHandler} className="sign__input" type="text" placeholder="Password"/>
                </label>
                <button className="sign__btn">Next step</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}