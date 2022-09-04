import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
import Piece from './components/Piece';
import Petitschevaux from './components/petits_chevaux/Petitschevaux';

const Puzzle = () => {
    const[datapuzzle, setDatapuzzle] = useState([]);

    useEffect(() => {
        axios.get('https://www.olivierpagnoz.fr/puzzle_application/api/contacts.php/datapuzzle/')
        .then((response) => setDatapuzzle(response.data));
        }, []);

    return (
        <div className='puzzle'>
            <Navigation />
            <div className='containerjeux'>
                <h2>LES PETITS CHEVAUX</h2>
                <Petitschevaux />
                <h2>LISTE DES PIECES</h2>
                <ul className='puzzle-liste'>
                    {datapuzzle.map((piece) => (
                        <Piece piece={piece} key={piece.id}/>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Puzzle;