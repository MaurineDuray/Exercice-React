import logo from '../images/logo-baseline.png'
import facebook from '../images/facebook.png'
import instagram from '../images/insta.png'
import linkedin from '../images/linkedin.png'

const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="container" id="footer">
                    <div className="footerLogo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="footerAdresse">
                        <p><b>Sandra Ciavarella</b></p>
                        <p><i>Massorelaxologue bien-être</i></p>
                     
                        <br />
                        <p>Rue Gustave Lhoir,52</p>
                        <p>7334 Hautrage(BE) </p>
                        <p><b>+32(0)474/22.00.65</b></p>
                        <p>universdouceur@hotmail.com</p>
                    </div>
                    <div className="footerNetwork">
                        <a href="https://www.facebook.com/UniversDouceurSandra" target="_blank"><img src={facebook} className="networks" alt="Logo facebook" /></a>
                        <a href="https://www.instagram.com/univers.douceur/" target="_blank"><img src={instagram} 
                        className="networks" alt="Logo facebook" /></a>
                        <a href="https://www.linkedin.com/in/sandra-ciavarella-76b713259/" target="_blank"><img src={linkedin}
                        className="networks" alt="Logo facebook" /></a>
                        
                    </div>

                </div>
            </footer>
            
        </>
     );
}
 
export default Footer;