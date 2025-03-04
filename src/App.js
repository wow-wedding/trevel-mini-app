import React from "react"
import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/Header';
import Main from "./components/Main/Main";

function App() {

  const {onToggleButton, tg} = useTelegram()

  useEffect( () => {
    tg.ready()
  }, [])



  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>toggle</button>
      <Main />
    </div>
  );
}

export default App;
