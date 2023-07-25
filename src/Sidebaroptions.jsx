import react from "react";
import "./Sidebaroptions.css";

function Sidebaroptions({active,text,Icon})
{

    return(
        <div className={'sidebaroptions ${active &&"sidebarOptions--active"}'}>
        <h2><Icon /></h2>
        <h2> {text}</h2>
        </div>
    ) ;
}

export default Sidebaroptions;