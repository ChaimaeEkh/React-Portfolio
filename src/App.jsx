import React from 'react';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {

  return (
    <div className='App'>
      <Header/>
      <div className='divider' />
      <Hero/>
      <div className='divider' />
      <Main/>
      <div className='divider' />
      <Contact/>
      <div className='divider' />
      <Footer/>
    </div>
  )
}

export default App
