import React from 'react';
import './Userinfo.scss';

function Userinfo({name,lastName,phone,email,job}) {
  return (
    <div className="container">
       <div className='users'>
      <div className='users__main d-flex'>
        <div className='users__box'>
          <img className='users__img' src="https://www.computerhope.com/jargon/g/guest-user.jpg" alt="img" />
          <span className="users__star"><i className='bx bxs-star'></i></span>
        </div>
        <div className='users__info'>
          <h2 className='users__title'>{name} {lastName}</h2>
          <div className='users__adresing d-flex'>
            <span className='users__span'>Phone: </span>
            <p className='users__adres'>{phone}</p>
          </div>
          <div className='users__adresing d-flex'>
            <span className='users__span'>Email: </span>
            <p className='users__adres'>{email}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Userinfo;