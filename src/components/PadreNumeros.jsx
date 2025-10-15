import { Component } from "react";
import HijoNumero from "./HijoNumero";

class PadreNumeros extends Component{
    state = {
        suma:0,
        numeros:[parseInt(Math.random() * 100 + 1),parseInt(Math.random() * 100 + 1),parseInt(Math.random() * 100 + 1),parseInt(Math.random() * 100 + 1)]
    }
    
    sumarNumeros = (numeroHijo) => {
        this.setState({
            suma : this.state.suma += parseInt(numeroHijo)
        })
    }
    generarNuevosNumeros = () => {
        this.setState({
            numeros:[parseInt(Math.random() * 100 + 1),parseInt(Math.random() * 100 + 1),parseInt(Math.random() * 100 + 1),parseInt(Math.random() * 100 + 1)]
        })
    }
    render(){
        return(
            <div>
            <h1>Padre Numeros</h1>
            {this.state.numeros.map((numero, index) => {
                return (
                <HijoNumero key={index} sumarNumeros={this.sumarNumeros} numero={numero}/>
                )
            })}
            <button type="button" onClick={this.generarNuevosNumeros}>Generar otros Numeros</button>
            <h3>Resultado de suma Numeros: {this.state.suma}</h3>
            <hr />
            </div>
        )
    }
}
export default PadreNumeros;