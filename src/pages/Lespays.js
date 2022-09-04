import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
import Card from './components/Card';

const Lespays = () => {
    const[data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all?fields=name,capital,flags,population')
        .then((response) => setData(response.data));
        }, []);
        
    return (
        <div className='lespays'>
            <Navigation />
            <h1>LISTE DES PAYS</h1>
            <ul className='lespays-liste'>
                {data.map((country) => (
                    <Card country={country} key={country.name.common}/>
                ))}
            </ul>
        </div>
    );
};

export default Lespays;