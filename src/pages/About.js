import Navigation from "./components/Navigation";
import Toiturenord from "./components/ruffey/Toiturenord";
import Logo from './images/ruffey_vue_face.jpg';


const About = () => {
    return (
        <div className="about">
            <Navigation />
            <div className="containerruffey">
                <h1>OBJECTIF RUFFEY</h1>
                <img src={Logo}/>
                <br/>
                <p>Lorem</p>
            </div>
            <div className="toit_nord_ouest">
               <h4>DETAIL TOIT</h4> 
               <Toiturenord />
            </div>
        </div>
    )
}

export default About;