import React from 'react';
import './Userinfo.scss'
function Userinfo({inputValue, lastValue}) {
  return (
    <div className="container">
       <div className='users'>
      <div className='users__main d-flex'>
        <div className='users__box'>
          <img className='users__img' src="https://www.computerhope.com/jargon/g/guest-user.jpg" alt="img" />
          <span className="users__star"><i className='bx bxs-star'></i></span>
        </div>
        <div className='users__info'>
          <h2 className='users__title'>{lastValue} {inputValue}</h2>
          <div className='users__adresing d-flex'>
            <span className='users__span'>Adresse: </span>
            <p className='users__adres'>Tashkent</p>
          </div>
          <div className='users__adresing d-flex'>
            <span className='users__span'>Bio: </span>
            <p className='users__adres'>Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Userinfo;