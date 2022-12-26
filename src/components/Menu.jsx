import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <>
        <nav id="mainMenu">
            <div id="logo"><img src={logo} alt="" /><h6>Uni-vers Douceur</h6></div>
            <ul>
                <li><Link to="/"> Accueil</Link></li>
                <li><Link to="/about"> À propos</Link></li>
                <li><Link to="/massages"> Les massages</Link></li>
                <li><Link to="/contact"> Contact</Link></li>
            </ul>
            <div className="burgerMenu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <p>Menu</p>
            </div>
        </nav>

        <div className="slide" id="menuResponsive">
            <div className="croix">

            </div>
            <ul id="menuResp">
                    <li><Link to="/"> Accueil</Link></li>
                    <li><Link to="/about"> À propos</Link></li>
                    <li><Link to="/massages"> Les massages</Link></li>
                    <li><Link to="/contact"> Contact</Link></li>
            </ul>
        </div>
        
        
        </>
     );
}
 
export default Menu;