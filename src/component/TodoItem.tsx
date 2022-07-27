import React from "react";
import { useAppDispatch } from "../hook";
import { removeTodo, toggleTodoCompite } from "../store/todoSlice";
import '../styles/todoItem.scss';
interface TodoItemProps {
    id: number,
    completed: boolean,
    title: string,
}

const TodoItem: React.FC<TodoItemProps> = ({id, completed, title}) => {
    const dispatch = useAppDispatch();
    const handleRemoveTodo = () => dispatch(removeTodo(id))
    const handleToggleComplite = () => dispatch(toggleTodoCompite(id))
    return (
        <li className="todo">
            <input type="checkbox" checked={completed} onChange={handleToggleComplite} />
            <span className="todo__title" >{title}</span>
            <button className="todo__delete" onClick={handleRemoveTodo}>&times;</button>
        </li>
    )
}

export default TodoItem;