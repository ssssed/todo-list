import React from 'react';

interface TodoFormProps {
    value: string,
    handleTextChange: (str: string) => void,
    addTask: () => void,
}

const TodoForm: React.FC<TodoFormProps> = ({value, addTask, handleTextChange}) => {
   
  return (
    <div className='container'>
      <input type='text' value={value} onChange={(e) => handleTextChange(e.target.value)} />
      <button onClick={addTask}>Добавить</button>
    </div>
  );
};

export default TodoForm;
