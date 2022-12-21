import logo from './images/logo.png'
import './App.css';

import Menu from './components/Menu';

function App() {
  return (
    <>
      <Menu />
      <div className="slide" id="home">
        <div className='item'>
          <img id="logoHome" src={logo} alt="" />
          <h4>Bienvenue chez</h4>
          <h1>Uni-vers Douceur</h1>
          <h2>par <strong>Sandra Ciavarella</strong></h2>
          <h6>Masso-relaxologue bien-être</h6>
          <a href="#" id="btnPlus">En savoir plus</a>
        </div>
        
      </div>
      
    </>
    
  );
}

export default App;
