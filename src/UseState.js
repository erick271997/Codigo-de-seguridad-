import React from "react";


const SECURITY_CODE='paradigma'; //estos es para validar el cidigo se seguridad


 function UseState({name}){// si cambaimos el nombre a Usestate en App, cambia aqui tambien name
    const[state, setState]= React.useState({ //Para guardar los estados
        value:'',
        error:false,
        loading:false,
        deleted: false,
        confirmed:false,// este y deleted te preguntara si desea elimar 
    });
    const [value, setvalue]= React.useState('');// los usario escriba
    const [error, setError]= React.useState(false);
    const [loading, setloading]= React.useState(false); //son estado se de poner asi por convecion se lla state, setState

    const onConfirm = () =>{
        setState({
            ...state,
            error:false,
            loading: false,
            confirmed:true,
        });
    };

    const onError = () =>{
        setState({
            ...state,
            error:true,
            loading: false,
        });
    };

    const onWarite = (newValue) =>{
        setState({
            ...state,
            value: newValue,
        });
    };

    const onCheck = ()=>{
        setState({
            ...state,
            loading: true,
        });
    };
    const onDelete = () =>{
        setState({
            ...state,
            deleted:true,
        });
    };

    const onReset= () =>{
        setState({
            ...state,
            confirmed:false,
            deleted:false,
            value:'',
        });
    }

    React.useEffect(()=> {
        console.log("empemzando el efecto")
        
        if(!!state.loading){
            setTimeout(() => {
                console.log("Haciendo la validacion")

                if (state.value === SECURITY_CODE) {
                  onConfirm();
              /*  setloading(false); */
            }else{
                onError();
            }
            
          
//estos para que espere para que se juecute la aplicacion
          console.log("Terminado la valiacion")
         },3000);

        }

        console.log("Terminado el efecto")
        }, [state.loading]);

      

    
  if (!state.deleted && !state.confirmed){
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
               onWarite(event.target.value);
               /* setError(false); */ // este para que cambie cuando el usuario esta escribiendo el estado de error
               /* setvalue(event.target.value); //el valor sera lo que escriba los usuario */
           }}
           />
           <button
           onClick={() => {
           /* setError(false); */ //para que cambie el estado de carga si el codigo es correcto se quita
            onCheck();
       }} 
       > Comprobando</button>
           
    
       
       </div>
       );
    } else if (!!state.confirmed && !state.deleted){
        return(
            <React.Fragment>
                <p>edimos confirmacion. ¿Esta seguro? </p>
                
                
                <button
                    onClick={()=>{
                       onDelete();
                    }}
            >
                    Si, elimanar
                    </button>
                <button
                onClick={()=>{
                   onReset(); 
                }}
            >
                    No, Gracias</button>
            </React.Fragment>
        );
    }else{
        return(
            <React.Fragment>
            <p>Eliminaado con exito</p>
                <button
                onClick={()=>{
                   onReset();
                }}
             >
                    Recuperar
                </button>
        </React.Fragment> 
        )
    }
  }


export default UseState;