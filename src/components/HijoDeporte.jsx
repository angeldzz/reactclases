import React, { Component } from 'react'

export default class HijoDeporte extends Component {
    state = {
        favorito : ""
    }
    mostarFavorito = () => {
        this.setState({
            favorito:this.props.nombre
        })
    }
  render() {
    return (
      <div>
        <h3 style={{color:"green"}}>Deporte: {this.props.nombre}</h3>
        <h2>Su deporte favorito es : {this.state.favorito}</h2>
        <button onClick={this.mostarFavorito} type="button">Seleccionar Favorito</button>
      </div>
    )
  }
}
