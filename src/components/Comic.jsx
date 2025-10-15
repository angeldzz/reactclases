import { Component } from "react";

export default class Comic extends Component{
    render(){
        return(
            <div>
                <h4>Hijo Comic {this.props.comic.titulo}</h4>
                <p>{this.props.comic.descripcion}</p>
                <button type="button" 
                onClick={ () => {
                                this.props.seleccionarFavorito(this.props.comic)
                            }
                    }
                >Seleccionar favorito</button>
                <button onClick={()=>{
                    this.props.deleteComic(this.props.index)
                }} type="button">Eliminar Comic</button>
                <img style={{width:"150px",height:"150px"}} src={this.props.comic.imagen} alt={this.props.comic.titulo} />
            </div>
        )
    }
}