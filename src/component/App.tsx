import React, { useState } from 'react'
import { useAppDispatch } from '../hook';
import { addTodo } from '../store/todoSlice';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../styles/App.scss'

const App: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();
  
  const addTask = () => {
    if(text.trim().length) {
      dispatch(addTodo(text))
      setText('');
    }
  }

  return (
    <div className='App'>
      <TodoForm value={text} handleTextChange={setText} addTask={addTask} />
      <TodoList />
    </div>
  )
}

export default App