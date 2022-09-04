import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Casejeux from './Casejeux';

const Petitschevaux = () => {
    const[datacase, setDatacase] = useState([]);
    useEffect(() => {
        axios.get('https://www.olivierpagnoz.fr/puzzle_application/api/contact_releve_casepetitschevaux.php/')
        .then((response) => setDatacase(response.data));
        }, []);
    return (
        <div className='petitschevaux'>
            <ul className='casedujeux'>
                  {datacase.map((casejeux) => (
                    <div key={casejeux.id}><Casejeux  casejeux={casejeux} /></div>
                  ))}
            </ul>
            
        </div>
    );
};

export default Petitschevaux;