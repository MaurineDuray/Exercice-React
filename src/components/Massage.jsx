import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Massage = () => {
    let {name} = useParams();
    // recherche dans les param un paramètre qui s'appelle name et crée une variable dans les hook qui s'appelle name
    
    return (
        <>
            < Menu />
            <div className="container">
                <Link to="/massages">Retour à la liste des massages</Link>
                <div className="row">
                    <h1>Le massage: {name} </h1>
                    <p>Voici les informations concernant le massage {name}</p>

                </div>
                <div className="row">
                    <div className="left">
                        <img src="" alt="image du massage" />
                        <h4>Prix du massage : 25€/séance</h4>
                        <h4>Durée de la séance : minutes</h4>
                        <p>Zones massées : </p>

                    </div>
                    <div className="right">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum doloribus similique illo dignissimos porro. Officiis totam dolor iure a magnam fugiat! Nostrum, ab maiores nemo illo tenetur sit, deleniti iure culpa ipsam, magni minima quibusdam! Id qui, delectus eius dolorum veritatis nam aliquid nobis vel eveniet rerum tenetur doloremque ullam esse voluptatem corrupti obcaecati ratione officia? Culpa quod ipsam corrupti, similique maxime quisquam nesciunt? Sapiente placeat obcaecati error culpa odit! Mollitia at ex quam perferendis accusamus magnam dignissimos aperiam, tempora pariatur soluta provident praesentium, laboriosam officia libero. Ullam, tempore maxime minus et similique quibusdam voluptate, saepe harum magnam enim dicta id! Odio vero culpa, architecto quae doloribus assumenda corporis veritatis possimus ab cumque ut aperiam veniam quasi nobis iusto illum temporibus voluptate ratione praesentium nihil error earum alias? Explicabo, ab architecto dolorem necessitatibus voluptas officiis eligendi voluptate consequatur fugiat eius optio amet modi incidunt dolore dolor ipsum similique veniam fugit.</p>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
        );
}
 
export default Massage;