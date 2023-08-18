import React from 'react';
import Heading  from './components/Heading';
import Dress from './components/Dress'
import './App.css'
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Heading />
      <Dress/>
      <Footer/>
    </div>
  );
}

export default App;
