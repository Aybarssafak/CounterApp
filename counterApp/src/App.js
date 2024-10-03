import React, { useState } from 'react';
import Counter from './component/component';

function App() {
  const [step, setStep] = useState(1);  // Başlangıç değeri 1

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setStep(isNaN(value) ? 1 : value);  // Eğer input boşsa veya sayı değilse, default olarak 1 yap
  };

  return (
    <div className="App" style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <h1>Counter App</h1>
      <div>
        <label htmlFor="stepInput">Kaçar kaçar artsın: </label>
        <input 
          id="stepInput" 
          type="number" 
          value={step} 
          onChange={handleChange} 
          placeholder="Enter a number"
        />
      </div>
      <Counter step={step} />
    </div>
  );
}

export default App;
