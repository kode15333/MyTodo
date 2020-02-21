import React from 'react';
import axios from 'axios'
import './App.css';



function App() {
  const handleClick1 = () => {
    axios.get("/api/user").then(res => {
      console.log(res.data)
    })
  }
  const handleClick2 = () => {
    axios.get("/api/post").then(res => {
      console.log(res.data)
    })
  }
  return (
    <div className="App">
      
      <button onClick={handleClick1}>버튼 클릭</button>
      <button onClick={handleClick2}>버튼 클릭</button>

    </div>
  );
}

export default App;
