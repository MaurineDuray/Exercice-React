
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <>
            <Menu />
            <div className="container" id="about">
               
                <div className="row">
                     <h1>À propos de moi </h1>
                    <div className="left">
                        <div className="photoSandra"></div>
                        <div id="rectangle"></div>
                    </div>
                    <div className="right">
                    
                        <p><b>𝚄𝚗 𝚟𝚘𝚢𝚊𝚐𝚎, 𝚞𝚗 𝚙𝚊𝚛𝚝𝚊𝚐𝚎...</b></p>
                        

                            <p><br />Depuis toujours ma priorité est de <b>faire plaisir, donner, transmettre.</b></p>
                            <p>Graduée en tourisme-gestion, je rêvais d'illuminer les yeux des touristes, mais un travail dans le domaine de la vente s'est vite offert à moi.
                            Durant ces 25 ans, j'ai pu évoluer de vendeuse mi-temps à responsable.</p>

                            <p><br />Mon parcours professionnel a ensuite pris une toute autre direction et je me suis lancée dans <b>une formation de massages Bien-Etre chez Tagnon.</b></p>

                            <p><br />Je découvre le sens de cette nouvelle passion, masser pour <b>instaurer un " UNI-VERS DOUCEUR" par la magie de mes mains.</b></p>

                            <p><br />Ma philosophie Carpe Diem, vous emmènera prendre soin de vous, vous reconnecter ou tout simplement vous faire plaisir.</p>

                            <p><i><br />"...ᴄʜᴀǫᴜᴇ ᴍᴏᴍᴇɴᴛ ᴇsᴛ ᴜɴ ᴄᴏᴍᴍᴇɴᴄᴇᴍᴇɴᴛ..." T.S Eliot.</i></p>
                    </div>
                </div>
                <div className="row rose">
                <h1>Mon univers douceur</h1>
                
                    <div className="left">
                        <p><br />Je vous accueille dans mon Uni-Vers Douceur à mon <b>domicile</b>, sur <b>rendez-vous.</b></p>
                        <p><br />Je vous accueille aussi tous <b>les mardis au Centre Malice</b> à Dour sur rendez-vous ! </p>
                        <p><br />Je me déplace également en <b>maisons de repos, centres, hôpitaux, </b>pour les massages palliatifs uniquement.</p><br />

                        <p>
                            <b>Prenez rendez-vous par téléphone au: </b>
                            <br /><b>+32(0)474/22.00.65</b>
                            <br /><Link to="/massages" className="btnMasssages"><div className="btn">Voir les massages</div></Link>
                        </p>
                        
                        
                    </div>
                    <div className="right">
                    <div className="photoSalon"></div>
                        <div id="rectangle"></div>
                    </div>
                </div>
            </div>

            <Footer />
            
        </>
        
     );
}
 
export default About;