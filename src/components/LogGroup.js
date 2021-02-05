import React, {useState, useEffect} from "react";
import Header from "./Header";
import Log from "./Log";
import skills from "../assets/data.js";
import { v4 as uuidv4 } from 'uuid';



function LogGroup() {

    const [skillLogs, setSkillLogs] = useState([]);

    useEffect(() => {
      const localSkillsTest = JSON.parse(localStorage.getItem('log')) || [...skills];
      setSkillLogs([...localSkillsTest])
    }, []); 
  
    useEffect(() => {
      if (supportsLocalStorage()) {
        saveDataToLocal();
      }
    });
  
    function supportsLocalStorage() {
      try {
        return 'localStorage' in window && window['localStorage'] !== null;
      } catch(e) {
        console.log(e);
        return false;
      }
    }
    
    function saveDataToLocal() {
      localStorage.setItem('log', JSON.stringify(skillLogs));
    }
  
    function handleSubmitTime(time, index) {
      setSkillLogs( prevState => {
        const updatedLogs = [ ...prevState]
        const log = { ...updatedLogs[index]};
        log.log.push({timeInMinutes: time})
  
        return [...updatedLogs];
      })
  
    }
  
    function addLog() {
      setSkillLogs(prevState => {
        const updatedLogs = [ ...prevState];
        //need to create unique id, this method will not work when items are spliced.
        // const newId = updatedLogs.length + 1;
        const newId = uuidv4();
        //CHANGE -- collect from input
        const name = "test name";
        const time = 5;
  
        updatedLogs.push(
          {
            name: `${name}`,
            id: `${newId}`,
            log: [
              {
              timeInMinutes: time
              } 
            ]
          }
        )
  
      return [ ...updatedLogs];
      })
  
    }
  
    function removeLog(index) {
      setSkillLogs(prevState => {
        const updatedLogs = [ ...prevState];
        updatedLogs.splice(index, 1);
        return [ ...updatedLogs];
      })
  
    }
  
  
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main>
          {skillLogs.map((topic, index) => 
            <Log
              key={topic.id}
              id={topic.id}
              index={index}
              name={topic.name}
              log={topic.log}
              handleSubmitTime={handleSubmitTime}
              removeLog={removeLog}
            />
          )}
          <button onClick={addLog}>Add log</button>
        </main>
      </div>
    );
  }
  
export default LogGroup;