import logo from '../images/logo.png'
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <>
        <nav id="mainMenu">
            <div id="logo"><img src={logo} alt="" /></div>
            <ul>
                <li><Link to="/"> Accueil</Link></li>
                <li><Link to="/about"> À propos</Link></li>
                <li><Link to="/massages"> Les massages</Link></li>
                <li><Link to="/contact"> Contact</Link></li>
            </ul>
        </nav>

       
      
        </>
     );
}
 
export default Menu;