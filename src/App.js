import { useEffect } from 'react';
import './App.css';


function App() {

  useEffect( () => {
    tg.ready()
  }, [])



  return (
    <div className="App">
      HUI
      <button>Закрыть</button>
    </div>
  );
}

export default App;
