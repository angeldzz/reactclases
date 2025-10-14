import React, { Component } from 'react'
import HijoDeporte from './HijoDeporte'

export default class PadreDeportes extends Component {
    deportes = ["Football","Tenis","Padel","Petanca"];
  render() {
    return (
        <div>
            <h1 style={{color:"red"}}>Padre Deportes</h1>
            <hr />
            {
            this.deportes.map((deporte, index) => {
                return(<HijoDeporte key={index} nombre={ deporte }/>)
            })
            }
        </div>
    )
  }
}
