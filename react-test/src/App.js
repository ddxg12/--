import MyButton from "./MyButton"
import { Button1, Button2, Button3 } from "./Buttonlib"
import AP from "./AboutPage"
import { Profiler, useState } from "react";
import AboutPage from "./AboutPage";
import CountState from "./CountState";

export default function App() {
  return (
    <div>
    <h1>Hello React</h1>
    <MyButton /><br />
    <Button1 />&nbsp;
    <Button3 />
    <AP/>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={onclick}>
      Clicked [count] times
      </button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div className='wrapper'>
      <h1>Welcome to my app</h1>
    <div>
      <p>default export example</p>
      <MyB />
      <p>default export example</p>
      <Button1 /> &nbsp;
      <Button3 />
      <p>wrapping example</p>
      <AboutPage />
      <p>Displaying data</p>
      <Profile />
      <p>Rendering lists</p>
      <ShoppingList />
    </div>
    <div>
      <p>Updating the screen</p>
      <CountState />
      <CountState />
      <CountState />
    </div>
    <div>
      <p>Sharing data between component</p>
      <CountState2 count= {count} onClick={handleClick} />
      <CountState2 count= {count} onClick={handleClick} />
    </div>
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
