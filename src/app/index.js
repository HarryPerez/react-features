import React, { useState } from 'react';
import './scss/application.scss';
import logo from './assets/logo.svg';
import './styles.css';

function App() {
  const [counter, setCounter] = useState(0);
  const incCounter = () => setCounter(counter + 1);
  const decCounter = () => setCounter(counter - 1);

  return (
    <div className='App'>
      <div className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {`Learn React Value: ${counter}`}
        </a>
        <button onClick={incCounter}>{'Increment Counter'}</button>
        <button onClick={decCounter}>{'Decrement Counter'}</button>
      </div>
    </div>
  );
}

export default App;