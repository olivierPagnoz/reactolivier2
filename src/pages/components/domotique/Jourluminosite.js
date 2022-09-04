import React from 'react';

const Jourluminosite = (props) => {
    const { luminosite } = props;
    return (
        <div className='jourluminosite' style={{marginTop:luminosite.minute_lever/3, marginLeft:luminosite.id*3, height:luminosite.minute_luminosite/3}}>
            
        </div>
    );
};

export default Jourluminosite;