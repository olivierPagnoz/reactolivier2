import React from 'react';
const Atomegenerale = (props) => {
    const { atome } = props;
   
    return (
        <div className='atomegenerale' style={{marginTop:atome.ordonne*66, marginLeft:atome.absisse*60}} >
            <div className={atome.serie} id={atome.nom_francais}>
                
                <h3>{atome.id}</h3>
                <h2>{atome.symbole}</h2>
                <p>{atome.nom_francais}</p>
            
            </div>
        </div>
    );
};

export default Atomegenerale;