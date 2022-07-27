import React from 'react';
import { useAppDispatch, useAppSelector } from '../hook';
import { toggleOpenTodoList } from '../store/todoSlice';
import '../styles/todoForm.scss';

interface TodoFormProps {
  value: string;
  handleTextChange: (str: string) => void;
  addTask: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  value,
  addTask,
  handleTextChange,
}) => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.todo.isVisible);

  const handleToogleVisible = () => {
    dispatch(toggleOpenTodoList(!isVisible));
  };
  return (
    <div className='container'>
      <button className='container__btn' onClick={handleToogleVisible}>
        {isVisible ? (
          <svg className='arrow-top-3' viewBox='0 0 5 9'>
            <path d='M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z' />
          </svg>
        ) : (
          <svg className='arrow-bottom-3' viewBox='0 0 5 9'>
            <path d='M0.419,9.000 L0.003,8.606 L4.164,4.500 L0.003,0.394 L0.419,0.000 L4.997,4.500 L0.419,9.000 Z' />
          </svg>
        )}
      </button>
      <input
        className='container__input'
        type='text'
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <button className='container__btn' onClick={addTask}>
        Добавить
      </button>
    </div>
  );
};

export default TodoForm;
