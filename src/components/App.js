import logo from '../logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header';
import Card from './Card';
import skills from "../assets/data.js";


function App() {

  // const [skillLogs, setSkillLogs] = useState([...skills]);

  const [skillLogs, setSkillLogs] = useState([]);

  useEffect(() => {
    const localSkillsTest = JSON.parse(localStorage.getItem('log')) || [...skills];
    setSkillLogs([...localSkillsTest])
  }, []); 

  function supportsLocalStorage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
      console.log(e);
      return false;
    }
  }
  
  function saveDataToLocal() {
    console.log(`skill log test: ${JSON.stringify(skillLogs)}`);
    localStorage.setItem('log', JSON.stringify(skillLogs));
  }

  function handleSubmitTime(time, index) {
    
    setSkillLogs( prevState => {
      const updatedLogs = [ ...prevState]
      const log = {...updatedLogs[index]};
      // const newTimeIndex = log.log.length();
      console.log(log);
      log.log.push({timeInMinutes: time})

      return [...updatedLogs];
    })

    if (supportsLocalStorage()) {
      saveDataToLocal();
    }

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
