import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Massages = () => {
    return ( 
        <>
            <Menu />
            <div className="container massages">
                <div className="row ">
                    <h1>Les massages</h1>
                    <div className="row massagesList">
                        
                        <div className="card">
                            <h5>Massage Harmonisant</h5>
                            <div className="img harmonisant"></div>
                            <p>45 à 60€ / séance de 45 à 60 minutes</p>
                            <Link className="linkbtn" to="/massages/harmo"><button>Plus d'infos</button></Link>
                        </div>
                        <div className="card">
                            <h5>Massage au Bol Kansu</h5>
                            <div className="img kansu"></div>
                            <p>45 à 60€ / séance de 45 à 60 minutes</p>
                            <Link className="linkbtn" to="/massages/kansu"><button>Plus d'infos</button></Link>
                        </div>
                        <div className="card">
                            <h5>Massage "Ancrage Tibétain"</h5>
                            <div className="img tibetain"></div>
                            <p>45 à 60€ / séance de 45 à 60 minutes</p>
                            <Link className="linkbtn" to="/massages/tibetain"><button>Plus d'infos</button></Link>
                        </div>
                        <div className="card">
                            <h5>Massage dos stressé</h5>
                            <div className="img dos"></div>
                            <p>35 à 50€ / séance de 35 à 50 minutes</p>
                           <Link className="linkbtn" to="/massages/dos"> <button>Plus d'infos</button></Link>
                        </div>
                        <div className="card">
                            <h5>Massage crânien</h5>
                            <div className="img cranien"></div>
                            <p>35 à 50€ / séance de 35 à 50 minutes</p>
                            <Link className="linkbtn" to="/massages/cranien"><button>Plus d'infos</button></Link>
                        </div>
                        <div className="card">
                            <h5>Massage jambes lourdes</h5>
                            <div className="img jambes"></div>
                            <p>35 à 50€ / séance de 35 à 50 minutes</p>
                            <Link className="linkbtn" to="/massages/jambes"><button>Plus d'infos</button></Link>
                        </div>
                        <div className="card">
                            <h5>Massage sportif avant et après effort</h5>
                            <div className="img sportif"></div>
                            <p>35 à 50€ / séance de 35 à 50 minutes</p>
                            <Link className="linkbtn" to="/massages/sportif"><button>Plus d'infos</button></Link>
                        </div>
                        <div className="card">
                            <h5>Massage Amma-assis</h5>
                            <p>À partir de 3 ans</p>
                            <div className="img amma"></div>
                            <p>25€ / séance de 25 minutes</p>
                            <Link className="linkbtn" to="/massages/amma"><button>Plus d'infos</button></Link>
                        </div>
                        <div className="card">
                            <h5>Massage aux pinceaux</h5>
                            <p>À partir de 3 ans</p>
                            <div className="img pinceaux"></div>
                            <p>25€ / séance de 25 minutes</p>
                            <Link className="linkbtn" to="/massages/pinceaux"><button>Plus d'infos</button></Link>
                        </div>
                        <div className="card">
                            <h5>Réflexologie palmaire</h5>
                            <p>À partir de 3 ans</p>
                            <div className="img palmaire"></div>
                            <p>25€ / séance de 25 minutes</p>
                           <Link className="linkbtn" to="/massages/palmaire"> <button>Plus d'infos</button></Link>
                        </div>
                        <div className="card">
                            <h5>Massage aux pinceaux ou</h5>
                             <h5>à la crème Dermalex</h5>
                            <p>Adapté au palliatif</p>
                            <div className="img palliatif"></div>
                            <p>25€ / séance de 25 minutes</p>
                            <Link className="linkbtn" to="/massages/palliatif"><button>Plus d'infos</button></Link>
                        </div>
                        <div className="card" id="contactCard">
                            <h3>CHÈQUE CADEAU</h3>
                            <div>
                                <p>Vous désirez faire plaisir à quelqu'un ? Pensez au chèque cadeau !</p>
                                <div className="img cadeau"></div>
                                <p>Valeur du chèque personnalisable</p>
                            </div>
                            

                            <Link to="/contact"><button id="btnContact">Me contacter</button></Link>
                        </div>
                    </div>
                </div>
              
            </div>
            
            <Footer />
        </>
     );
}
 
export default Massages;