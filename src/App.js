import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/counter/counter';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(({ counterSlice: { count } }) => count)
  return (
		<div className='App'>
			<h1>{count}</h1>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				{/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
				<button onClick={() => dispatch(increment())}>increment</button>
				<button onClick={() => dispatch(decrement())}>decrement</button>
			</header>
		</div>
	)
}

export default App;
