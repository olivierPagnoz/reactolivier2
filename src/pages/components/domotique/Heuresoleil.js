import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Heuresoleil = () => {
    const State={
        d : new Date().getDate(),
        m : new Date().getMonth()+1,
        tmp : Math.round(new Date().getTime()),    
    };
    let timestamprefannee = Date.parse('2022-01-01 00:00:01');
    let ecarttempsref = State.tmp-timestamprefannee;
    ecarttempsref = Math.floor(ecarttempsref/86400000)+1;
    let timestamprefsemaine = Date.parse('2022-01-03 00:00:01');
    let ecartsemaine = State.tmp-timestamprefsemaine;
    ecartsemaine = Math.floor(ecartsemaine/604800000)+1;

    const[datasoleil, setDatasoleil] = useState([]);
  useEffect(() => {
      axios.get('https://www.olivierpagnoz.fr/puzzle_application/api/contact_releve_soleil.php?jour='+ecarttempsref+'')
      .then((response) => setDatasoleil(response.data));
      }, []);
    return (
        <div className='heuresoleil'>
            <h5>{ecarttempsref}° jour de l'année - Semaine : {ecartsemaine}</h5>
            <h4>LEVER / COUCHER du SOLEIL</h4>
            {datasoleil.slice(0, 1).map((ephemeride)  => (
                <div key={ephemeride}>   
                <h4>{ephemeride.lever} - {ephemeride.coucher}</h4>
                <h5>+ {ephemeride.difference_luminosite} mn. de soleil </h5>
                <h5>{ephemeride.phase_lune}</h5>
                </div>          
                ))} 
        </div>
    );
};

export default Heuresoleil;