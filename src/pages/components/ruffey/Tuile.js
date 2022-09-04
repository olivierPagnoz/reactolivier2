import React from 'react';

const Tuile = (props) => {
    const { tuile } = props;
    let typelue = tuile.typetuile;
    let bgcolor = 'red';
    if (typelue === 'cheminee') {
        bgcolor = 'gray';
    }
    if (typelue === 'clair') {
        bgcolor = 'orange';
    }
    return (
        <div className='tuile'  style={{marginTop:tuile.ordonne*15, marginLeft:tuile.absisse*8, backgroundColor:bgcolor}}>
            
        </div>
    );
};

export default Tuile;