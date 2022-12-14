import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { setCamsAction, updateCamsAction } from './services/actions/camsAction';
import { getCamsObserver } from './services/observers/camsObservers';


function App() {
  const [cams, setCams] = useState<any[]>([]);
  useEffect(()=>{
    getCamsObserver(setCams);
  },[])
  
  return (   
    <div className="App">
      {cams.map((elem)=>(
        <p>{elem.NomeCamera}</p>
      ))}
    </div>
  );
}

export default App;
