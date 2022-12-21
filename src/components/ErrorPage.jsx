import { useRouteError } from "react-router-dom";
import Menu from "./Menu";

export default function ErrorPage(){
    const error = useRouteError()

    console.log(error)

    return (
        <>
            <Menu />
            <div id="error-page">
                <h1>OOPS !</h1>
                <p>Désolé, la page que vous cherchez n'existe pas ou plus ! </p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </>
        
    )
}