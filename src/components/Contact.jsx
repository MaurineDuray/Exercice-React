import Menu from "./Menu";
import Footer from "./Footer";

const Contact = () => {
    return ( 
        <>
            <Menu />
            <div className="container" id="contact">
                <div className="row">
                <h1>Contact</h1>
                    <div className="left">
                        <div className="bloc">
                            <h3>Sandra CIAVARELLA</h3>
                            <h4>Masso-relaxologue et bien-être</h4>
                            <br />
                            <p>Rue Gustave Lhoir,52</p>
                            <p>7334 Hautrage(BE) </p>
                            <p><b>+32(0)474/22.00.65</b></p>
                            <p>universdouceur@hotmail.com</p>
                        </div>
                    </div>
                    <div className="right">
                        <form action="" method="POST">
                            <p>Vous désirez en savoir plus sur les services proposés, laissez-moi un message !</p>
                            <div className="form-group">
                                <label htmlFor="lastname" id="lastname" name="lastname">Nom:</label>
                                <input type="text" name="lastname" id="lastname" />
                            </div>
                        
                            <div className="form-group">
                                <label htmlFor="firstname" id="firstname" name="firstname">Prénom:</label>
                                <input type="text" name="firstname" id="firstname" />       
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="">Email: </label>
                                <input type="mail" name="email" id="email" />
                            </div>
                            

                            <div className="form-group">
                                <label htmlFor="">Votre message: </label>
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="ENVOYER" id="send"/> 
                            </div>
                        </form>

                    </div>
                </div>
                
            </div>
            
            <Footer />
        </>
     );
}
 
export default Contact;