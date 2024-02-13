import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0)

  const add = () =>{
   setNumber(prevNumber => prevNumber + 1) 
  }
   const refresh = () => {
     setNumber((prevNumber) => prevNumber = 0);
   }
    const substract = () => {
      setNumber((prevNumber) => prevNumber -1);
    };

  return (
    <main>
      <section className="container">
        <p>Counter Project</p>
        <h1>{number}</h1>
        <div>
          <button onClick={add}>+</button>
          <button onClick={refresh}>refresh</button>
          <button onClick={substract}>-</button>
        </div>
        <h3> &copy; IZCI development 2024</h3>
      </section>
    </main>
  );
}

export default App;
