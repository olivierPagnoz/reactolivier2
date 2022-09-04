import Relevetemperature from "./components/domotique/Relevetemperature";
import Navigation from "./components/Navigation";
const d = new Date();
console.log(d);
const Home = () => {
    return (
        <div className="home">
            <div className="containerhome">
            <Navigation />
            <h1>ACCUEIL</h1>
            <Relevetemperature />
           
            </div>
        </div>
    )
}

export default Home;