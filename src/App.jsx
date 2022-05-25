import {Route, Routes } from 'react-router-dom';
import './App.css';
import Adiblar from './components/Adiblar';
import Books from './components/Books';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Home from './components/Home/Home';
import Maqolalar from './components/Maqolalar';
import SignIn from './components/Sign/Signin';
import SignUp from './components/Sign/Signup';
import Users from './components/Writers';

function App() {
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
        <Route path="/kitoblar" element= {<Books />}/>
      </Routes>
    </>
  );
}

export default App;
