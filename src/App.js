import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Github } from './Components/About/Github';
import { ThemeContext } from './Context/theme';
import { About } from './Components/About/About';
import { Header } from './Components/Header/Header';
import { Contact } from './Components/Contact/Contact';
import { ScrollToTop } from './Components/ScrollToTop/ScrollToTop';
import { Footer } from './Components/Footer/Footer';
import Home from './Components/home/Home';


const App = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
    </main>
    </>
  );
}

export default App;
