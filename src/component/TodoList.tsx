import React, { useState } from 'react';
import { useAppSelector } from '../hook';
import TodoItem from './TodoItem';
import '../styles/todoList.scss';
import { AnimatePresence, motion } from 'framer-motion';

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todo.list);
  const isVisible = useAppSelector(state => state.todo.isVisible);
  
  return (
    <AnimatePresence>
      {isVisible && (<motion.ul
      initial={{height: 0}}
      animate={{height: 'auto'}}
      exit={{height: 0}}
      className='todos'>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </motion.ul>)}
    </AnimatePresence>
  );
};

export default TodoList;
