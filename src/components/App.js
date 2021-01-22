import logo from '../logo.svg';
import React, { useState } from "react";
import './App.css';
import Header from './Header';
import Card from './Card';
import skills from "../assets/data.js";

// function createCard(topic) {
//   return (
//     <Card
//       key={topic.id}
//       id={topic.id}
//       name={topic.name}
//     />
//   );
// }



function App() {

  const [skillLogs, setSkillLogs] = useState([...skills])

  function createCard(topic) {
  return (
    <Card
      key={topic.id}
      id={topic.id}
      name={topic.name}
      log={topic.log}
    />
  );
}

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        {skillLogs.map(createCard)}
      </main>
    </div>
  );
}

export default App;
