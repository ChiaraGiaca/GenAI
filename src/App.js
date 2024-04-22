import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import Header from './components/Header' 
import Body from './components/Body'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TextToImagePage from './components/TextToImagePage';
import EvaluationPage from './components/EvaluationPage';
import { useEffect } from 'react';

function App() {
  const currentPath = window.location.pathname;
  let [navbarComponent, setNavbarComponent] = React.useState(<Body/>);
  
  useEffect(() => {
    if (currentPath === '/') {
      setNavbarComponent(<Body />);
    } else if (currentPath === '/TextToImagePage') {
      setNavbarComponent(<TextToImagePage />);
    } else if (currentPath === '/EvaluationPage') {
      setNavbarComponent(<EvaluationPage />);
    } 
 }, [navbarComponent, setNavbarComponent])
  
  return (
    <div className="font-link" >
      <Header className= "header"></Header>
      <div>{navbarComponent}</div>
      
    </div>
  );
}

export default App;
