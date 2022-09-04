import React, { useState } from "react";

const Ongletserie = () => {
    const changeStyle = () => {
        var result =document.getElementsByClassName('alcalin')
        return(
        result[0].style.backgroundcolor='red'
        )
       };

   

    return (
        <div className='ongletserie'>
            <ul>
                <li className='btn_alcalin'>
                    <button onclick={changeStyle}>
           ALCALINS
        </button></li>
                <li>ALCALINO-TERREUX</li>
                <li>TRANSITION</li>
                <li>NON METAUX</li>
                <li>GAZ NOBLES</li>
                <li>LANTHANIDES</li>
                <li>ACTINIDES</li>
            </ul>
            
        </div>
    );
};

export default Ongletserie;