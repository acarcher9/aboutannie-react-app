import logo from './logo.svg';
import './App.css';

const name = 'Annie';
const hobbies = ['running', 'reading', 'cooking'];


function App() {
  return (
    <div className= "aboutAnnie"><h1 id = "myName">Hello my name is {name}</h1>
    <p id= "myHobbies">My hobbies include:
      <ul>
        <li>{hobbies [0]}</li>
        <li>{hobbies[1]}</li>
        <li>{hobbies[2]}</li>
      </ul>
    </p>
    <p id= "funFact">My fun fact is that I can speak French fluently!</p>
    </div>
  );
}

export default App;
