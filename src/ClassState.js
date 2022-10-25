
import React from "react";
import Loading from "./Loading";


const SECURITY_CODE ='paradigma';


class ClassState extends React.Component{
    constructor(props){
        super(props); // estos se debe poner para que resiva los this

        this.state ={
            value: '',
            error: false,
            loading:false,
        };
    }
   /*  UNSAFE_componentWillMountt(){
        console.log("componentWillMount")
    } */

   /*  componentDidMount(){
        console.log("componentDidMount")
    } */

    componentDidUpdate(){
        console.log("atualizacion");
        if(!!this.state.loading){ // estamos pregunto a servido se loadin es this.state true cambie a false
            setTimeout(() => {
                console.log("Haciendo la validacion")

                   /*  this.setState({loading:false});// para atualice loading en this.setState */

                   if(SECURITY_CODE===this.state.value){
                       this.setState({error:false, loading:false});
                   } else {
                       this.setState({error:true, loading:false});
                   }
          
          
                    console.log("Terminado la valiacion")
         },3000);

        }
    }
   

    render (){
        
        return(
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor escribe el codigo de seguridad</p>
            
                {(this.state.error && !this.state.loading)&& (
                    <p>Erro: de codigo es incorreto</p>
                    )} {/* esta pregunto si erro es tru renderiseme lo que sepone  despues de &&, si cambie arriba de donde false a tru sale el texto */}
                     {this.state.loading && (
                    <Loading/> //este es del componete Loadian para que aparezca todo en este estado tambien se debe importa 
                    )}
                    
    
                <input placeholder="Codigo de seguridad"
                value={this.state.value}
                onChange={(event) =>{
                    this.setState({value:event.target.value});
                }}
                />
                <button
                onClick={()=>this.setState({loading: true})}
                >Comprobando</button>
                
            
            </div>
        );
    }

}
    
 


export default ClassState;