import React from 'react';

const Atome = (props) => {
    const { atome } = props;

   
    return (
        <div className='atome'>
            <div className={atome.serie}>
            <h3>{atome.id}</h3>
            <h2>{atome.symbole}</h2>
            <p>{atome.nom_francais}</p>
            </div>
        </div>
    );
};

export default Atome;