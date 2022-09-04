import React from 'react';

const Piece = (props) => {
    const { piece } = props;

   
    return (
        <div className='piece'>
            <p>{piece.emplacement} - {piece.absisse}</p>
        </div>
    );
};

export default Piece;