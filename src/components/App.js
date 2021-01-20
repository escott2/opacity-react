import logo from '../logo.svg';
import './App.css';
import Header from './Header';
import Card from './Card';
import learningLogs from "../assets/data.js";

function createCard(topic) {
  return (
    <Card
      key={topic.id}
      id={topic.id}
      name={topic.name}
    />
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        {learningLogs.map(createCard)}
      </main>
    </div>
  );
}

export default App;
