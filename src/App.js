import logo from './holberton-logo.jpg';
import './App.css';
import  { getFullYear, getFooterCopy }  from './utils.js';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='Holberton-logo' alt="Holberton logo"/>
        <h1>School dashboard</h1>
      </header>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
        <label htmlFor='email'> Email: <input type='text' name='email'/> </label>
        <label htmlFor='password'> Password: <input type='text' name='password'/> </label>
        <button className='Ok-button' type='submit'>OK</button>
        </form>
      </div>

      <footer className='App-footer'>
        <p>Copyright { getFullYear() } { getFooterCopy("True") }</p>

      </footer>
    </div>
  );
}

export default App;
