import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Temperature from './Temperature';
import Heuresoleil from './Heuresoleil';
import Luminositeannuelle from './Luminositeannuelle';
import Humidite from './Humidite';

const Relevetemperature = () => {
 
  const state={
    d : new Date().getDate(),
    m : new Date().getMonth()+1,
    tmp : Math.round(new Date().getTime()),
    
 };

 let timestampref = Date.parse('2022-'+state.m+'-'+state.d+' 00:00:01');
  let ecarttempsref = state.tmp-timestampref;
  ecarttempsref = Math.floor(ecarttempsref/600000);
  const[datatemperature, setDatatemperature] = useState([]);
  useEffect(() => {
      axios.get('https://www.olivierpagnoz.fr/puzzle_application/api/contact_releve_temperature.php/')
      .then((response) => setDatatemperature(response.data));
      }, []);
  
    return (
        <div className='relevetemperature'>
          <div className='containersoleil'>
            <Heuresoleil />
          </div>
          <div className='containerinfo'>
            {datatemperature.slice(0, 1).map((temperature) => (
                    <div key={temperature}>
                      <h4>TEMPERATURE : {temperature.sonde1}</h4>
                      <h4>DHT22 wifi : {temperature.temp_dht22}</h4>
                      <h4>HUMI wifi : {temperature.hum_dht22}</h4>
                      <h4>SONDE 2 : {temperature.temp_eau}</h4>
                      <h5>{temperature.date}</h5>
                    </div>      
                ))}
          </div>
          
          <div className='containercourbe' >
            <ul className='repere_ordonne'>
              <li className='repere_zero'>
                0°
              </li>
              <li className='repere_trente'>
                30°
              </li>
              <li className='repere_vingt'>
                20°
              </li>
              <li className='repere_dix'>
                10°
              </li>
            </ul>
            <ul className='temperature-liste-veille'>
                  {datatemperature.slice(ecarttempsref, ecarttempsref+144).map((temperature) => (
                    <div key={temperature.id}><Temperature  temperature={temperature} /></div>
                  ))}
            </ul>
            <ul className='temperature-liste-avant-veille'>
                  {datatemperature.slice(ecarttempsref+144, ecarttempsref+288).map((temperature) => (
                    <div key={temperature.id}><Temperature  temperature={temperature} /></div>
                  ))}
            </ul>
            <ul className='temperature-liste'>
                  {datatemperature.slice(0, ecarttempsref).map((temperature) => (
                    <div key={temperature.id}><Temperature  temperature={temperature} /></div>
                  ))}
            </ul>
          </div>
          <div className='containerhumidite'>
          <ul className='repere_ordonne_hum'>
              <li className='repere_cent'>
                100%
              </li>
              <li className='repere_soixantequinze'>
                75%
              </li>
              <li className='repere_cinquante'>
                50%
              </li>
            </ul>
            <ul className='humidite-liste'>
                      {datatemperature.slice(0, ecarttempsref).map((humidite) => (
                        <div key={humidite.id}><Humidite  humidite={humidite} /></div>
                      ))}
              </ul>
              <ul className='humidite-liste-veille'>
                  {datatemperature.slice(ecarttempsref, ecarttempsref+144).map((humidite) => (
                    <div key={humidite.id}><Humidite  humidite={humidite} /></div>
                  ))}
            </ul> 
            {datatemperature.slice(0, 1).map((humidite) => (
                    <div key={humidite}>
                      <h4>HUMI wifi : {humidite.hum_dht22} %</h4>
                      <h5>{humidite.date}</h5>
                    </div>      
                ))}
          </div>
          <br></br>
          <Luminositeannuelle />  
        </div>
    );
};

export default Relevetemperature;