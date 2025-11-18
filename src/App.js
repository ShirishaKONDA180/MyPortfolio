import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Servicess/Servicess';
import About from './components/About/About';
import MyWork from './components/MyWork/Mywork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


 const App=() => {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      {/* <MyWork/> */}
      <Contact/>
      <Footer/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}
export default App;