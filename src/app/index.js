import React, { useState } from 'react';
import logo from './assets/icons/logo.svg';
import styles from './styles.module.scss';

function App() {
  const [counter, setCounter] = useState(0);
  const incCounter = () => setCounter(counter + 1);
  const decCounter = () => setCounter(counter - 1);

  return (
    <div className={styles.app}>
      <div className={styles['app-header']}>
        <img src={logo} className={styles['app-logo']} alt='logo' />
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
