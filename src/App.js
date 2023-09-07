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
import Aos from "aos";
import "aos/dist/aos.css";


function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="home">
        <Header />
      </section>
      <main>
        <About />
        <Github />
      <section id="contact">
        <Contact />
      </section>
        
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
