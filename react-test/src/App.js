import MyButton from "./MyButton"
import { Button1, Button2, Button3 } from "./Buttonlib"
import AP from "./AboutPage"

export default function App() {
  return (
    <div>
    <h1>Hello React</h1>
    <MyButton /><br />
    <Button1 />&nbsp;
    <Button3 />
    <AP/>
    </div>
  )
}



/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
