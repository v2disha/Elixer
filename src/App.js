import React from 'react';
import { Footer,Blog,WhatElixer,Header,FAQ } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatElixer/>
      <CTA/>
      <Blog/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App