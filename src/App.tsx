import React, { useState } from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import SearchResult from './components/SearchResult/SearchResult';
import SelectResult from './components/SelectResult/SelectResult';

function App() {
  const router = localStorage.getItem('Router')
  console.log(router);
  const render = (router: any) => {
    switch (router) {
      case 'SelectResult':
        return <SelectResult />
      case 'SearchResult':
        return <SearchResult />
      default: break
    }
  }

  return (
    <>
      <Home />
      { render(router)}
    </>
  );
}

export default App;
