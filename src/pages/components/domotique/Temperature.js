import React from 'react';

const Temperature = (props) => {
    const { temperature } = props;
    const state={
         d : new Date().getDate(),
         m : new Date().getMonth()+1,
         v : new Date().getDate()-1,
         av : new Date().getDate()-2,
      };
    
    let datelue = temperature.date;
    let timestamp = Date.parse(datelue);
    let timestampref = Date.parse('2022-'+state.m+'-'+state.d+' 00:00:01');
    let timestamprefveille = timestampref-86400000;
    let timestamprefavantveille = timestamprefveille-86400000;
    let bgcolor = 'black';
    
    if (timestamp > timestampref) {
        timestamp = timestamp-timestampref;
        timestamp = timestamp/600000;
        
        } else  {
        if (timestamp > timestamprefveille) {
        timestamp = timestamp-timestamprefveille;
        timestamp = timestamp/600000;
        bgcolor = 'red';
        } else {
            if (timestamp > timestamprefavantveille) {
            timestamp = timestamp-timestamprefavantveille;
            timestamp = timestamp/600000;
            bgcolor = 'white';
            }
        }
    }
    
    return (
        <div className='temperature' style={{marginTop:500-(temperature.sonde1*15), marginLeft:timestamp*4, backgroundColor:bgcolor}}>
           
        </div>
    );
};

export default Temperature;