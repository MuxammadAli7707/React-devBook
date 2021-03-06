import React from 'react';
import './Usersetting.scss';
import camera from '../../assets/images/Camera.svg';
import { Link } from 'react-router-dom';

function Usersetting(
  {
    name,
    setName,
    lastName,
    setLastName,
    phone,
    setPhone,
    email,
    setEmail,
    job,
    setJob
  
  }) {

  return (
    <div className="setting">
      <div className="setting__main">
        <div className="setting__imgbox">
          <img className="setting__img" src="https://www.computerhope.com/jargon/g/guest-user.jpg" alt="user" />
          <img className="setting__icon" src={camera} alt="camera"/>
        </div>
        <div  className="setting__info">
          <h3 className="setting__title">My profile</h3>
          <form className="setting__form">
            <div className="setting__inputbox d-flex flex-column">
              <label for="validationCustom01" className="setting__label">First name</label>
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="setting__input" id="validationCustom01" required />
              <span className="setting__span">Please enter your first name.</span>
            </div>

            <div className="setting__inputbox d-flex flex-column">
              <label for="validationCustom02" className="setting__label">Last name</label>
              <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className="setting__input" id="validationCustom02" required />
              <span className="setting__span">Please enter your last name.</span>
            </div>
            <div className='d-flex setting__inputboxing'>
              <div className="setting__inputbox d-flex flex-column">
                <label for="validationCustom03" className="setting__label">Phone</label>
                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" className="setting__inputing" id="validationCustom03" placeholder="61412345678" required />
                <span className="setting__span">Please enter your  phone number.</span>
              </div>
              <div className="setting__inputbox d-flex flex-column">
                <label for="validationCustom04" className="setting__label">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="setting__inputing" id="validationCustom04" placeholder="user@reeves.com" required />
                <span className="setting__span">Please enter your email address.</span>
              </div>
            </div>
            <div className="setting__line"></div>

            <div className="setting__button">
              <Link to="/users">
              <button className="setting__btn">Save Changes</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Usersetting;