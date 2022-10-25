import React from "react";


const SECURITY_CODE='paradigma'; //estos es para validar el cidigo se seguridad


 function UseState({name}){// si cambaimos el nombre a Usestate en App, cambia aqui tambien name
    const [value, setvalue]= React.useState('');// los usario escriba
    const [error, setError]= React.useState(false);
    const [loading, setloading]= React.useState(false); //son estado se de poner asi por convecion se lla state, setState

    console.log(value);

    React.useEffect(()=> {
        console.log("empemzando el efecto")
        
        if(!!loading){
            setTimeout(() => {
                console.log("Haciendo la validacion")

                if (value !== SECURITY_CODE) {
                  setError(true);  
                }
               setloading(false);
            
          
//estos para que espere para que se juecute la aplicacion
          console.log("Terminado la valiacion")
         },3000);

        }

        console.log("Terminado el efecto")
        }, [loading]);

      

    
     return ( 
     <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor escribe el codigo de seguridad</p>
        
        {(error && !loading ) && ( /* se le poso el loading para cuando vamos a validar el estado se quite el texto de codigo incorrecto */
            <p>Erro: de codigo es incorreto</p>
        )} {/* esta pregunto si erro es tru renderiseme lo que sepone  despues de &&, si cambie arriba de donde false a tru sale el texto */}
    
        {loading && (
            <p>Cargando...</p>
        )}  
        <input 
        placeholder="Codigo de seguridad"
        value={value}
        onChange={(event)=>{
            /* setError(false); */ // este para que cambie cuando el usuario esta escribiendo el estado de error
            setvalue(event.target.value); //el valor sera lo que escriba los usuario
        }}
        />
        <button
        onClick={() => {
        /* setError(false); */ //para que cambie el estado de carga si el codigo es correcto se quita
        setloading(true);
    }} 
    > Comprobando</button>
        
 
    
    </div>
    );
 }


export default UseState;