import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  console.log(time);
  const [newtime, setNewTime] = useState(time);

  const changeTime = () => {
    const now = new Date().toLocaleTimeString();
    setNewTime(now);
  };
  setInterval(changeTime, 1000);
  return (
    <div className="container">
      <h1>{newtime}</h1>
      <button onClick={changeTime}>Get Time</button>
    </div>
  );
}

export default App;
