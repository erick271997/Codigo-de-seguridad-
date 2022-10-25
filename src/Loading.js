
import React from "react";


class loading extends React.Component{
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }
    render (){
        
        return(
            <p>Cargando...</p>
        );
    }

}
    
 


export default loading;