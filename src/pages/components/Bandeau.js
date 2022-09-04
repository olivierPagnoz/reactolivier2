import React from 'react';
import Dateetheure from './Dateetheure';

const Bandeau = () => {
    return (
        <div className='bandeau'>
           <div className='heure'><Dateetheure /></div>
           <div className='nom'>Olivier Pagnoz</div>
           <div className='text'>
              <p>Développeur full stack front-end - Infographiste</p> 
              
                  <ul>
                      <li><i className='fab fa-html5'></i></li>
                      <li><i className='fab fa-js'></i></li>
                      <li><i className='fab fa-python'></i></li>
                      <li><i className='fab fa-php'></i></li>
                      <li><i className='fab fa-react'></i></li>
                      <li>-</li>
                      <li><i className='fab fa-adobe'></i></li>
                      <li><i className='fab fa-linux'></i></li>
                      <li><i className='fab fa-photoshop'></i></li>
                  </ul>
                
           </div>
           <div className='reseau'></div>
        </div>
    );
};

export default Bandeau;