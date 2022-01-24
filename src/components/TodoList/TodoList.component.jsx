import React from 'react';
import Todo from '../Todo/Todo.component';


const TodoList = ({todos}) => {
    return (
        <div>
            {
                todos.map((todo, i) => {
                return (
                    <Todo item={todo[i]} />
                )
            })}
            
        </div>
    )
}

export default TodoList; 