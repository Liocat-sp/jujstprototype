import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Headers from "./Components/Header/Header";
import AboutUs from "./Components/AboutUs/AboutUs";
import Content from './Components/Content/Content';
import Subscribe from "./Components/Subscribe/Subscribe";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Headers />
      <AboutUs />
      <Content />
      <Subscribe />
      <ContactUs />
    </div>
  );
}

export default App;
