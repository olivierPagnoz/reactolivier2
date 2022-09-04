import React, { useState } from 'react';
const state={
    date : new Date().toLocaleString(),
            m : new Date().getMinutes(),
            h : new Date().getHours(),
            s : new Date().getSeconds(),  
  };
  
const Dateetheure = () => {
    const [countheure, setCountheure] = useState(state.h);
    const [countminute, setCountminute] = useState(state.m);
    const [countseconde, setCountseconde] = useState(state.s);
    const [generale, setGenerale] = useState(state.date);
  
    const timeout = setTimeout(() => {
      let heurelue= new Date().getHours();
       if (heurelue<10) {heurelue="0"+heurelue};
      setCountheure(heurelue);
      let minutelue = new Date().getMinutes();
      if (minutelue<10) {minutelue="0"+minutelue};
      setCountminute(minutelue);
      let secondelue= new Date().getSeconds();
       if (secondelue<10) {secondelue="0"+secondelue};
      setCountseconde(secondelue);
      let generalelue = new Date().toLocaleString();
      setGenerale(generalelue);
    }, 1000);  
    
  
    return (
      <div className="dateetheure">
        <h3> {generale}</h3>
      </div>
    );
  }
export default Dateetheure;