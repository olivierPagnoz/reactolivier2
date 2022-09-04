import React, { useState } from 'react';
const state={
    date : new Date().toLocaleString(),
    m : new Date().getMinutes(),
    h : new Date().getHours(),
    s : new Date().getSeconds(),
     sec : "rotate(240deg)",
  };
const mystyle = {
    transform: state.sec,
}
  
  const Horloge = () => {
      
    const [countheure, setCountheure] = useState(state.h);
    const [countminute, setCountminute] = useState(state.m);
    const [countseconde, setCountseconde] = useState(state.s);
    const [generale, setGenerale] = useState(state.sec);
  
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
        <div className='horloge'>
            <div id="horloge">
                        <div class="clock">
                            
                            <div id="insert_logo">
                            
                            </div>
                            
                            <div class="hours-container">
                                <div class="hours"></div>
                            </div>
                            <div class="minutes-container">
                                <div class="minutes"></div>
                            </div>
                            <div class="seconds-container" style={mystyle} >
                                <div class="seconds"></div>
                            </div>
                            <div id="date_heure"></div>
                        </div>
                        <div id="rond_rouge"></div>
                        <div id="rond_noir"></div>
                        
                    </div>
            
        </div>
    );
};

export default Horloge;