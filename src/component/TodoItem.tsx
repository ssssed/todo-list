import React from "react";
import { useAppDispatch } from "../hook";
import { removeTodo, toggleTodoCompite } from "../store/todoSlice";

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
        <li>
            <input type="checkbox" checked={completed} onChange={handleToggleComplite} />
            <span>{title}</span>
            <span onClick={handleRemoveTodo}>&times;</span>
        </li>
    )
}

export default TodoItem;