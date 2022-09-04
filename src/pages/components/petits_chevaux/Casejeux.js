import React from 'react';

const Casejeux = (props) => {
    const { casejeux } = props;
    let typerecu = casejeux.typecase;
    let bgcolor = casejeux.couleur;
    let textecase = '';
    if (typerecu == 'sortie')
            {
                bgcolor = 'white';
                textecase = casejeux.valeur
            };    
    return (
        <div className='casejeux' style={{marginTop:casejeux.ordonne*40, marginLeft:casejeux.absisse*40, backgroundColor:bgcolor, color:casejeux.couleur}}>
            {textecase}
        </div>
    );
};

export default Casejeux;