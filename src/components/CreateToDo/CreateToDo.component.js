import React from 'react';
import './CreateToDo.styles.css'

const Createtodo = ({toDoInput, newTodo, pushTodo}) => {

    return (
        <div>
        <input onClick={pushTodo} onChange={newTodo} className="todo-Input" type='text' placeholder="Create a new todo" />
        </div>
    )
    
    
    
}

export default Createtodo