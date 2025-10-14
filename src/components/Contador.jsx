import { Component } from "react";
// Podemos declarar metodos fuera de la clase
function metodoAbsurdo() {
    console.log("Metodo sin funcionalidad");
}
class Contador extends Component {
    //! LAS VARIABLES SE DECLARAN A NIVEL DE CLASE, NO SE UTILIZA let, var, const
    numero = 1;
    //Con los metodos sucede exactament lo mismo, solo
    //? la declaracion
    incrementarNumero = () => {
        // Para acceder a las variables de clase, debemos utilizar 
        // la palabra clave this
        this.numero += 1;
        console.log("Valor de numero: " + this.numero);
    }
    //LAS VARIABLES STATE SON ECLARADAS EN EL OBJETO DE LA CLASE
    state = {
        valor : this.props.inicio
    }
    incrementarValor = () => {
        this.setState({
            valor : this.state.valor + 1
        })
    }
    //La sintaxis del codigo HTML a cambiado
    render() {
        return (<div>
            <h1 style={{ color: "red" }}>Ejemplo Contador JSX {this.props.inicio}</h1>
            {/* La llamada a los metodos se realiza con this y no se usa lamda ni parentesis */}
            <button onClick={() => {
                metodoAbsurdo();
                this.incrementarNumero();
            }}>
                LLamar funcion fuera de Component
            </button>
            <button onClick={this.incrementarNumero}>Incrementar numero</button>
            <button onClick={this.incrementarValor}>Incrementar numero {this.state.valor}</button>
        </div>)
    }
}
export default Contador;