import logo from './images/logo-baseline.png'
import './App.css';

import Menu from './components/Menu';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Menu />
      <div className="slide" id="home">
        <div className='item'>
          <img id="logoHome" src={logo} alt="" />
          <h2>par <i><strong>Sandra Ciavarella</strong></i></h2>
          <h6>Masso-relaxologue bien-être</h6>
          <p><b>Vous avez besoin d'un moment pour vous, de vous retrouver et/ou d'apaiser vos douleurs ?</b></p>
          <Link to="/about" id="btnPlus" >En savoir plus </Link>
        </div>
        
      </div>
      
      <Footer />
    </>
    
  );
}

export default App;
