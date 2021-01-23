import logo from '../logo.svg';
import React, { useState } from "react";
import './App.css';
import Header from './Header';
import Card from './Card';
import skills from "../assets/data.js";


function App() {

  const [skillLogs, setSkillLogs] = useState([...skills])

  function handleSubmitTime(time, index) {
    
    setSkillLogs( prevState => {
      const updatedLogs = [ ...prevState]
      const log = {...updatedLogs[index]};
      // const newTimeIndex = log.log.length();
      console.log(log);
      log.log.push({timeInMinutes: time})

      return [...updatedLogs];
    })
  }


//   function createCard(topic, index) {
//   return (
//     <Card
//       key={topic.id}
//       id={topic.id}
//       index={index}
//       name={topic.name}
//       log={topic.log}
//       handleSubmitTime={handleSubmitTime}
//     />
//   );
// }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        {skillLogs.map((topic, index) => 
          <Card
            key={topic.id}
            id={topic.id}
            index={index}
            name={topic.name}
            log={topic.log}
            handleSubmitTime={handleSubmitTime}
          />
        )}
      </main>
    </div>
  );
}

export default App;
