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

  let [inputValue, setInputValue] = useState('MuxammadAli');
  let [lastValue, setLastValue] = useState('Abdufattoxov');

  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/nazm" element={<Hero />} />
        <Route path="/maqolalar" element={<Maqolalar />} />
        <Route path="/forum" element={<SignUp />} />
        <Route path="Users/:id" element= {<Users/>}/>
        <Route path="/signin" element= {<SignIn />}/>
        <Route path="/signup" element= {<SignUp />}/>
        <Route path="/nasr" element= {<Books />}/>
        <Route path="Books/:id" element= {<BooksInfo />}/>
        <Route path="/users" element= {<Userinfo inputValue={inputValue} lastValue={lastValue} />}/>
        <Route path="setting" element= {<Usersetting setInputValue={setInputValue} setLastValue={setLastValue} />}/>
      </Routes>
    </>
  );
}

export default App;
