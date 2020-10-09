import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/counter';
import { addTodo, removeLastTodo } from './store/todo-list';
import { Circle } from './components/d3/Circle'
import { Axis } from './components/d3/Axis'
import { LineChart } from './components/d3/LineChart';
import { AxesAndScale } from './components/d3/AxesScale';
import { AnimatedBarChart } from './components/d3/AnimatedBarChart';
import { InteractiveBarChart } from './components/d3/InteractiveBarChart';
import { ResponsiveChart } from './components/d3/ResponsiveChart';
import { Chart } from './components/d3/RacingChart/Chart';
import logo from './logo.svg';
import './App.css';

function App() {
  const [addNewTodo, setAddTodo] = React.useState('')
  // const [data, setData] = React.useState([25, 30, 45, 60, 10, 65, 75]);
  // const count = useSelector(({ counterSlice }) => counterSlice.count)
  // const todo = useSelector(({ todoSlice }) => todoSlice.todoLists)
  // const dispatch = useDispatch()

  // const changeAddTodo = (e) => {
  //   setAddTodo(e.target.value)
  // }

  // const onKeyEnter = (e) => {
  //   if (e.key === 'Enter') {
  //     changeAddTodo(e)
  //     dispatch(addTodo(e.target.value))
  //   }
  // }

  // const handleAddTodo = () => {
  //   dispatch(addTodo(addNewTodo))
  //   setAddTodo('')
  // }

  // const handleRemoveTodo = (value) => {
  //   dispatch(removeLastTodo(value))
  // }

  return (
		<div className='App'>
			{/* <h1>{count}</h1> */}
			{/* <header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
        <div>
          <input 
            value={addNewTodo} 
            onChange = {e => changeAddTodo(e)}
            onKeyDown={e => onKeyEnter(e)}
          />
          <button onClick={handleAddTodo}>add todo</button>
        </div>

        <ul>
          {todo.map((item, index) => (
            <li key={index} onClick={() => handleRemoveTodo(item)}>{item}</li>
          ))}
        </ul>
				<button onClick={() => dispatch(increment())}>increment</button>
				<button onClick={() => dispatch(decrement())}>decrement</button>
			</header> */}
      <main>
        {/* <ResponsiveChart data={data} /> */}
        <Chart />
        {/* <InteractiveBarChart /> */}
        {/* <AnimatedBarChart /> */}
        {/* <AxesAndScale /> */}
        {/* <Circle /> */}
        {/* <Axis /> */}
        {/* <LineChart /> */}
      </main>  
		</div>
	)
}

export default App;
