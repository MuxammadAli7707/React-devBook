import React from "react";
import { Link } from "react-router-dom";
import './Sign.scss'
import signup from '../../assets/images/signin.svg'

export default function SignIn() {
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
              <h2 className="sign__title">Sign in</h2>
              <p className="sign__desc">Already have an account? <Link className="sign__link" to="/signup">Sign up</Link> </p>
              <form>
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