import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Tuile from './Tuile';

const Toiturenord = () => {
    const[datatuile, setDatatuile] = useState([]);
    useEffect(() => {
        axios.get('https://www.olivierpagnoz.fr/puzzle_application/api/contact_releve_tuile.php/')
        .then((response) => setDatatuile(response.data));
        }, []);
    
    return (
        <div className='toiturenord'>
            <ul className='tuiledutoit'>
                  {datatuile.map((tuile) => (
                    <div key={tuile.id}><Tuile  tuile={tuile} /></div>
                  ))}
            </ul>
        </div>
    );
};

export default Toiturenord;