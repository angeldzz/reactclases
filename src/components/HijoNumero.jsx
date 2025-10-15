import { Component } from "react";

class HijoNumero extends Component{
    sumarNumero = () => {
        console.log(this.props.numero);
        this.props.sumarNumeros(this.props.numero);
    }
    render(){
        return(
            <div>
                <h1>Hijo Numero {this.props.numero}</h1>
                <button type="button" onClick={this.sumarNumero}>Sumar Numero {this.props.numero}</button>
                <br />
            </div>
        )
    }
}
export default HijoNumero;