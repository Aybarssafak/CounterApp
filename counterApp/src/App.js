import React ,{
  Component,
  useState
} from "react";
import './App.css';
/*
function App() {
  const [counter, setCounter] = useState(0);

  const artir = () => {
    setCounter(counter + 1);
  }

  const azalt = () => {
    setCounter(counter - 1);
  }
  return (
    <div className="App">
      <button onClick={azalt} style={{
        fontSize: 50
      }}>-</button>
      <div style={{
        fontSize:50
      }}>
        {counter}
      </div>
      <button onClick={artir} style={{
        fontSize:50
      }}>+</button>
    </div>
  );
}
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
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
      counter: this.state.counter = 0
    })
  }

  render() {
    return <div style={{
      display:"flex",
      alignItems:"center",
      flexDirection:"column",
      justifyContent:"center"
    }}>
      
      <div className="counter" style={{
        display:"flex",
        flexDirection:"column",
        fontSize: 50,
        alignItems:"center",
        justifyContent:"center"
      }}>
        <h1 style={{fontSize:40}}>Counter App</h1>
        {this.state.counter}
      </div>
      <div >
        <button onClick={this.artir} style={{
          fontSize:50,
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
    </div>;
  }
};
export default App;
