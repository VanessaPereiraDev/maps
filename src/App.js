import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Pages from './components/Pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Pages />
    </div>
  );
}

export default App;
