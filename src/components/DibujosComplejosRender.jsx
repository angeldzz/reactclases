import React, { Component } from 'react'

export default class DibujosComplejosRender extends Component {
    //NECESITAMOS UN ARRAY CON NOMBRES Y DICHO ARRAY DEBE
    // ESTAR DELCARADO EN state PARA ACTUALIZAR EL DIBUJO
    state = {
        nombres: ["Lucia", "Diana", "Antonia", "Sofia", "Adrian"]
    }
    generarNombre = () => {
        this.state.nombres.push("Nuevo Nombre");
        this.setState({
            nombres : this.state.nombres
        })
    }
    render() {
        return (
            <div>
                <h1>Dibujos complejos Render</h1>
                {
                    
                    //ESTE CODIGO ES JSX DE REACT
                    // EL codigo logico debe contener un return
                    this.state.nombres.map((nombre, index) => {
                        // ESTE CODIGO NO PUEDE ESTAR VACIO NECESITA UN RETURN
                        return (
                            <h3 style={{ color: "blue" }} key={index}> {nombre} </h3>
                        )
                    })
                }
                <button onClick={this.generarNombre}>Generar Nuevo Nombre</button>
            </div>
        )
    }
}
