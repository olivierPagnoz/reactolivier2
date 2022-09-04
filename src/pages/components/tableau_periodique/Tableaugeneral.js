import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Atomegenerale from './Atomegenerale';

const Tableaugeneral = () => {
    var tableauserie = [
        { idserie: 'alcalin', couleur:'#FFC0BA'},
        { idserie: 'alcalino', couleur:'#FEFFAC'},
        { idserie: 'transition', couleur:'#96BAFE'},
        { idserie: 'nonmetal', couleur:'#B4FFB1'},
        { idserie: 'metalloide', couleur:'#DADADA'},
        { idserie: 'gaznoble', couleur:'#FFC88E'},
        { idserie: 'metalpauvre', couleur:'#FFD1E3'},
        { idserie: 'lanthanide', couleur:'brown'},
        { idserie: 'actinide', couleur:'purple'},
    ];
    const[dataatome, setDataatome] = useState([]);

    useEffect(() => {
        axios.get('https://www.olivierpagnoz.fr/puzzle_application/api/contact_classification_generale.php/dataatome/')
        .then((response) => setDataatome(response.data));
        }, []);
        const Affichedetail = (id,valeur,nom,masse,famille) =>{
            let recherchecouleur = tableauserie.find(x => x.idserie === famille);
            let indexrch = tableauserie.indexOf(recherchecouleur);
            let couleurtransmise = tableauserie[indexrch].couleur;
            document.getElementById('numeroatomique').innerHTML=id;
            document.getElementById('symbole').innerHTML=valeur;
            document.getElementById('lenom').innerHTML=nom;
            document.getElementById('masseatomique').innerHTML=masse;
            document.getElementById('laserie').innerHTML=famille;
            document.getElementById('containzoom').style.backgroundColor=couleurtransmise;

            var toutblanc = document.querySelectorAll('.alcalin,.alcalino,.transition,.nonmetal,.gaznoble,.actinide,.lanthanide,.metalloide,.metalpauvre,#alcalin,#alcalino,#transition,#nonmetal,#gaznoble,#actinide,#lanthanide,#metalloide,#metalpauvre');
            for(var i = 0; i < toutblanc.length; i++)
            {
                toutblanc[i].style.backgroundColor='white';
                toutblanc[i].style.height=60;
            }
           
            document.getElementById(famille).style.backgroundColor=couleurtransmise;
            document.getElementById(nom).style.backgroundColor=couleurtransmise;
        }        
    return (
        <div className='tableaugeneral' id='letableau'>
            <div className='containerdetail' id='containzoom'>
                <p id='masseatomique'></p>
                <p id='numeroatomique'></p>
                <p id='symbole'></p>
                <p id='lenom'></p>
                <p id='laserie'></p>
            </div>
            <ul className='atome-liste'>
                {dataatome.map((atome) => (
                    <div onClick={()=>Affichedetail(atome.id, atome.symbole, atome.nom_francais, atome.masse_atomique, atome.serie)}><Atomegenerale atome={atome} key={atome.id} /></div>
                ))}
            </ul>
        </div>
    );
};

export default Tableaugeneral;