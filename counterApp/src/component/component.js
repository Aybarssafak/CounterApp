import React, { useState } from 'react';

const Counter = ({ step }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <h2>Counter: {count}</h2>
      <div style={{
        display:'flex',
        flexDirection:'row',
        gap:'20px'
      }}>
        <button style={{
          backgroundColor:'black',
          color:'white',
          borderRadius:'50px',
          width:'50px',
          height:'50px',
          fontSize:'30px'
        }} onClick={handleIncrement}>+</button>
        <button style={{
          backgroundColor:'black',
          color:'white',
          borderRadius:'50px',
          width:'50px',
          height:'50px',
          fontSize:'30px'
        }} onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default Counter;
