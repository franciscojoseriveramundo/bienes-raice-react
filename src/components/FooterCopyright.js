import React from "react";

const FooterCopyright = () =>{
    const[state] = React.useState({
        anio : new Date().getFullYear().toString()
    });

    return (

        <p className="p-copyright text-center">&nbsp;&nbsp;Todos los derechos reservados. TechPlace S.A de C.V. {state.anio}</p>

    )
}

export default FooterCopyright;