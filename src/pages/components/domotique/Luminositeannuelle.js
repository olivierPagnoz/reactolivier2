import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Jourluminosite from './Jourluminosite';

const Luminositeannuelle = () => {
    const[dataluminosite, setDataluminosite] = useState([]);
  useEffect(() => {
      axios.get('https://www.olivierpagnoz.fr/puzzle_application/api/contact_releve_luminosite.php')
      .then((response) => setDataluminosite(response.data));
      }, []);
    return (
        <div className='luminositeannuelle'>
            <h4>LUMINOSITE SOLEIL EN 2022</h4>
            <div className='containerlumannuelle'>
            {dataluminosite.map((luminosite) => (
                    <div key={luminosite.id}><Jourluminosite luminosite={luminosite}/></div>
                ))}

            </div>
        </div>
    );
};

export default Luminositeannuelle;