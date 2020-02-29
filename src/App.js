import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header/>
      <Content/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
