import React from "react";


const SECURITY_CODE='paradigma'; //estos es para validar el cidigo se seguridad


 function UseState({name}){// si cambaimos el nombre a Usestate en App, cambia aqui tambien name
    const[state, setState]= React.useState({ //Para guardar los estados
        value:'',
        error:false,
        loading:false,
    });
    const [value, setvalue]= React.useState('');// los usario escriba
    const [error, setError]= React.useState(false);
    const [loading, setloading]= React.useState(false); //son estado se de poner asi por convecion se lla state, setState

    console.log(state);

    React.useEffect(()=> {
        console.log("empemzando el efecto")
        
        if(!!state.loading){
            setTimeout(() => {
                console.log("Haciendo la validacion")

                if (state.value === SECURITY_CODE) {
                    setState({
                        ...state,
                        error:false,
                        loading: false,
                    });
              /*  setloading(false); */
            }else{
                setState({
                    ...state,
                    error:true,
                    loading: false,
                });
            }
            
          
//estos para que espere para que se juecute la aplicacion
          console.log("Terminado la valiacion")
         },3000);

        }

        console.log("Terminado el efecto")
        }, [state.loading]);

      

    
     return ( 
     <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor escribe el codigo de seguridad</p>
        
        {(state.error && !state.loading ) && ( /* se le poso el loading para cuando vamos a validar el estado se quite el texto de codigo incorrecto */
            <p>Erro: de codigo es incorreto</p>
        )} {/* esta pregunto si erro es tru renderiseme lo que sepone  despues de &&, si cambie arriba de donde false a tru sale el texto */}
    
        {state.loading && (
            <p>Cargando...</p>
        )}  
        <input 
        placeholder="Codigo de seguridad"
        value={state.value}
        onChange={(event)=>{
            setState({
                ...state,
                value: event.target.value,
            });
            /* setError(false); */ // este para que cambie cuando el usuario esta escribiendo el estado de error
            /* setvalue(event.target.value); //el valor sera lo que escriba los usuario */
        }}
        />
        <button
        onClick={() => {
        /* setError(false); */ //para que cambie el estado de carga si el codigo es correcto se quita
        setState({
            ...state,
            loading: true,
        });
    }} 
    > Comprobando</button>
        
 
    
    </div>
    );
 }


export default UseState;