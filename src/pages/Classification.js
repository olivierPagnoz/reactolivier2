import Navigation from './components/Navigation';
import Tableaugeneral from './components/tableau_periodique/Tableaugeneral';

const Classification = () => {
    var tableauserie = [
        { idserie: 'alcalin', couleur:'#FFC0BA', couleurdetail:'#FF230E'},
        { idserie: 'alcalino', couleur:'#FEFFAC', couleurdetail:'#FBFE00'},
        { idserie: 'transition', couleur:'#96BAFE', couleurdetail:'#0058FF'},
        { idserie: 'nonmetal', couleur:'#B4FFB1', couleurdetail:'#2CC126'},
        { idserie: 'metalloide', couleur:'#DADADA', couleurdetail:'#7F7E7E'},
        { idserie: 'gaznoble', couleur:'#FFC88E', couleurdetail:'#ED7A00'},
        { idserie: 'metalpauvre', couleur:'#FFD1E3', couleurdetail:'#FF5395'},
        { idserie: 'lanthanide', couleur:'brown'},
        { idserie: 'actinide', couleur:'purple'},
    ];
    
    const Changeclick = (valeur) =>{
        var toutblanc = document.querySelectorAll('.alcalin,.alcalino,.transition,.nonmetal,.gaznoble,.actinide,.lanthanide,.metalloide,.metalpauvre,#alcalin,#alcalino,#transition,#nonmetal,#gaznoble,#actinide,#lanthanide,#metalloide,#metalpauvre');
            for(var i = 0; i < toutblanc.length; i++)
            {
                toutblanc[i].style.backgroundColor='white';
                toutblanc[i].style.height=60;
            }
        let recherchecouleur = tableauserie.find(x => x.idserie === valeur);
        let indexrch = tableauserie.indexOf(recherchecouleur);
        let couleurtransmise = tableauserie[indexrch].couleur;
        var testarray = (document).getElementsByClassName(valeur);
            for(var i = 0; i < testarray.length; i++)
            {
            testarray[i].style.backgroundColor=couleurtransmise;
            }
        document.getElementById(valeur).style.backgroundColor=couleurtransmise;    
        }    
    const Affichenoirblanc = () => {
        for( var j=0; j < tableauserie.length; j++)
        {
        let nomserie = tableauserie[j].idserie;
        
            var testserie = (document).getElementsByClassName(nomserie);
            for(var i = 0; i < testserie.length; i++)
            {
            testserie[i].style.backgroundColor = 'white';
            document.getElementById(nomserie).style.backgroundColor = 'white';
            }
        
        }
    }    
    const Couleurserie = () => {
        
        for( var j=0; j < tableauserie.length; j++)
        {
        let nomserie = tableauserie[j].idserie;
        let nomcouleur = tableauserie[j].couleur;
        
            var testserie = (document).getElementsByClassName(nomserie);
            for(var i = 0; i < testserie.length; i++)
            {
            testserie[i].style.backgroundColor = nomcouleur;
            document.getElementById(nomserie).style.backgroundColor = nomcouleur;
            }
        
        }
          
            
    }
    return (
        <div className='classification'>
             <Navigation />
            <div className="containerclassification">
                <h1>LA CLASSIFICATION PERIODIQUE DES ELEMENTS A PERSONNALSER ET TELECHARGER</h1>
                <div className="blocchoixcouleur">
                   <ul>
                       <li onClick={()=>Affichenoirblanc()}>AFFICHAGE N/B
                           <p >AFFICHE CADRE</p>
                       </li>
                       <li onClick={()=>Couleurserie()}>OPTION COULEUR</li>
                       <li>RENDU A4 PAYSAGE</li>
                    </ul>
                </div>
                <div className='ongletserie'>
                    <p>AFFICHAGE EN COULEUR PAR SERIE</p>
                    <hr></hr>
                    <ul>    
                        <li id="alcalin" onClick={()=>Changeclick('alcalin')} >ALCALINS</li>
                        <li id="alcalino" onClick={()=>Changeclick('alcalino')}>ALCALINO-TERREUX</li>
                        <li id="transition" onClick={()=>Changeclick('transition')}>TRANSITION</li>
                        <li id="metalpauvre" onClick={()=>Changeclick('metalpauvre')}>METAUX PAUVRES</li>
                        <li id="metalloide" onClick={()=>Changeclick('metalloide')}>METALLOIDES</li>
                    </ul>
                    <ul style={{marginLeft:170}}>
                        <li id="nonmetal" onClick={()=>Changeclick('nonmetal')}>NON METAUX</li>
                        <li id="gaznoble" onClick={()=>Changeclick('gaznoble')}>GAZ NOBLES</li>
                        <li id="lanthanide" onClick={()=>Changeclick('lanthanide')}>LANTHANIDES</li>
                        <li id="actinide" onClick={()=>Changeclick('actinide')}>ACTINIDES</li>
                    </ul>
                </div>
                <div className='tableaudirect'>
                <Tableaugeneral />
                </div>
           </div>
        </div>
    );
};

export default Classification;