import data from "./data";
import React, { Component } from "react";
import Opciones from "./Opciones";
console.log(data.length)


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      historial: [],
      contador: 0,
      seleccionPrevia: "",
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      this.setState({
        historial: [...this.state.historial, this.state.seleccionPrevia],
      });
    }
  }
  /*
    this.setState({historial: [...this.state.tasks, paramValue]})

    handlerValues( paramValue ){
    this.setState({tasks: [...this.state.tasks, paramValue]})
    }
    */

  handleClick = (event) => {
    
    
    const id = event.target.id;
    if (this.state.contador >= (data.length-2)) {
      alert("Fin.");
    } else if (id === "A" && this.state.seleccionPrevia !== "A") {
      this.setState({
        contador: this.state.contador + (data.length-8),
        seleccionPrevia: "A",
      });
    } else if (id === "A" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + (data.length-7),
      });
    } else if (id === "B" && this.state.seleccionPrevia === "A") {
      this.setState({
        contador: this.state.contador + (data.length-6),
        seleccionPrevia: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + (data.length-7),
        seleccionPrevia: "B",
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <div className="recordatorio">
          <h3>Selección anterior: {this.state.seleccionPrevia}</h3>
          <h4>Historial de opciones elegidas: </h4>
          <ul>
            {this.state.historial.map(
              (e, index) => (
                <li key={index}>{e}</li>
              ),
              data[this.state.contador].id
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;
