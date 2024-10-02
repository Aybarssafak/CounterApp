import React from "react";
import './App.css';
import CounterComponent from "./component/component"; 

function App() {
  return (
    <div className="App" style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      
      <CounterComponent initialCounter={0} />
    </div>
  );
}

export default App;
