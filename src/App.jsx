import { useState } from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import BooksInfo from './components/Books/BookInfo';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Home from './components/Home/Home';
import Maqolalar from './components/Maqolalar';
import SignIn from './components/Sign/Signin';
import SignUp from './components/Sign/Signup';
import Userinfo from './components/UserInfo/Userinfo';
import Usersetting from './components/UserSetting/Usersetting';
import Users from './components/Writers';

function App() {

  let [name, setName] = useState('')
  let [lastName, setLastName] = useState('')
  let [phone, setPhone] = useState('')
  let [email, setEmail] = useState('')
  let [job, setJob] = useState('')

  let [wishlist, setWishlist] = useState([])

  return(
    <>
      <Header
        wishlist={wishlist}
        setWishlist={setWishlist}
      />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/nazm" element={<Hero />} />
        <Route path="/maqolalar" element={<Maqolalar />} />
        <Route path="/forum" element={<SignUp
          name={name}
          setName={setName}
          lastName={lastName}
          setLastName={setLastName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          job={job}
          setJob={setJob}
        />} />
        <Route path="Users/:id" element= {<Users/>}/>
        <Route path="/signin" element= {<SignIn />}/>
        <Route path="/signup" element= {<SignUp />}/>
        <Route path="/nasr" element= {<Books />}/>
        <Route path="Books/:id" element= {<BooksInfo
          wishlist={wishlist}
          setWishlist={setWishlist}
        />}/>
        <Route path="/users" element= {<Userinfo 
          name={name}
          lastName={lastName}
          phone={phone}
          email={email}
          job={job}
        />}/>
        <Route path="setting" element= {<Usersetting 
        name={name}
        setName={setName}
        lastName={lastName}
        setLastName={setLastName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        job={job}
        setJob={setJob}
        />}/>
      </Routes>
    </>
  );
}

export default App;
