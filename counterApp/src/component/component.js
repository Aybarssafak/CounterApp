import React, { Component } from 'react';

class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.initialCounter || 0 // Default olarak 0 başlar, prop olarak değer alabilir.
    };
  }

  artir = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  azalt = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  sifirla = () => {
    this.setState({
      counter: 0
    });
  }

  render() {
    return (
      <div style={{
        alignItems:"center",
        justifyContent:"center",
      }}>            
        <div className="counter" style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 50,
            alignItems: "center",
            justifyContent: "center"
          }}>
          <h1 style={{ fontSize: 40 }}>Counter App</h1>
          {this.state.counter}
        </div>
        <div style={{
            alignItems:"center",
            justifyContent:"space-around",
            margin:"10px",
        }}>
          <button onClick={this.artir} style={{
            fontSize: 50,
            background: "black",
            color: "white",
            borderRadius: 50
          }}>+</button>
          <button onClick={this.sifirla} style={{
            fontSize: 50,
            background: "black",
            color: "white",
            borderRadius: 50
          }}>0</button>
          <button onClick={this.azalt} style={{
            fontSize: 50,
            background: "black",
            color: "white",
            borderRadius: 50
          }}>-</button>
        </div>
      </div>
    );
  }
}

export default CounterComponent;
