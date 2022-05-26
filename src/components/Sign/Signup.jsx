import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Sign.scss'
import signup from '../../assets/images/signup.svg'
import databaza from "../UserInfo/databaza";

export default function SignUp({
  setName,
  setLastName,
  setPhone,
  setEmail,
  setJob}) {

    let [isValid, setValid] = useState(false)


    const addNameHandler = (e) =>{
      if(e.target.value.match(/[0-9]/)){
        setValid(isValid = false)
      }
      else{
        setValid(isValid = true)
      }
      setName(e.target.value)
    }

    const addLastNameHandler = (e) =>{
      if(e.target.value.match(/[0-9]/)){
        setValid(isValid = false)
      }
      else{
        setValid(isValid = true)

      }
      setLastName(e.target.value)
    }

    const addNumberHanlder = (e) =>{
      if(e.target.value.length < 10){
        setValid(isValid = false)
      }
      else{
        setValid(isValid = true)

      }
      setPhone(e.target.value)
    }

    const addEmailHandler = (e) =>{
      if(!e.target.value.match(/[@]/)){
        setValid(isValid = false)
      }
      else{
        setValid(isValid = true)

      }
      setEmail(e.target.value)
    }
    
    const addJobHandler = (e) =>{
      if(e.target.value.match(/[!@#$%^&*()_+]/)){
        setValid(isValid = false)
      }
      else{
        setValid(isValid = true)

      }
      setJob(e.target.value)
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
              <p className="sign__desc">Already have an account? <Link className="sign__link" to="/signin">Sign in</Link></p>
              <form>
                <label className="sign__label" htmlFor="fristname">
                  <input 
                    onChange={addNameHandler}
                    id="fristname"
                    className={`sign__input ${isValid === true ? 'correct' : 'error'}`}
                    type="text" 
                    required
                    placeholder="First Name"/>
                </label>

                <label className="sign__label" htmlFor="lastname">
                  <input 
                    onChange={addLastNameHandler}
                    id="lastname" 
                    className={`sign__input ${isValid === true ? 'correct' : 'error'}`}
                    type="text"
                    required 
                    placeholder="Last name"/>
                </label>

                <label className="sign__label" htmlFor="upphone">
                  <input 
                    onChange={addNumberHanlder}
                    id="upphone" 
                    className={`sign__input ${isValid === true ? 'correct' : 'error'}`}
                    type="number"
                    required 
                    placeholder="Phone" />
                </label>

                <label className="sign__label" htmlFor="upmail">
                  <input 
                    onChange={addEmailHandler}
                    id="upmail" 
                    className={`sign__input ${isValid === true ? 'correct' : 'error'}`}
                    type="email" 
                    required
                    placeholder="Email" />
                </label>
                <label className="sign__label" htmlFor="uppass">
                  <input 
                    onChange={addJobHandler}
                    id="uppass" 
                    className={`sign__input ${isValid === true ? 'correct' : 'error'}`}
                    type="password" 
                    required
                    placeholder="Password"/>
                </label>
                <Link to={`${isValid === true ? '/users' : '/signup'}`}>
                  <button className="sign__btn">Next step</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}