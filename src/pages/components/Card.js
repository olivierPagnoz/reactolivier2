import React from 'react';

const Card = (props) => {
    const { country } = props;

    const numberFormat = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return (
        <div className='card'>
            <p>{country.name.common} - {country.capital} - {numberFormat (country.population)}</p>
            <img src={country.flags.png} />
        </div>
    );
};

export default Card;