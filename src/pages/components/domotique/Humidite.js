import React from 'react';

const Humidite = (props) => {
    const { humidite } = props;
    const state={
        d : new Date().getDate(),
        m : new Date().getMonth()+1,
        v : new Date().getDate()-1,
        av : new Date().getDate()-2,
     };
   
   let datelue = humidite.date;
   let timestamp = Date.parse(datelue);
   let timestampref = Date.parse('2022-'+state.m+'-'+state.d+' 00:00:01');
   let timestamprefveille = timestampref-86400000;
   let timestamprefavantveille = timestamprefveille-86400000;
   let bgcolor = 'white';
   
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
           bgcolor = 'yellow';
           }
       }
    }
    return (
        <div className='temperature' style={{marginTop:360-(humidite.hum_dht22*3), marginLeft:timestamp*4, backgroundColor:bgcolor}}>
            
        </div>
    );
};

export default Humidite;