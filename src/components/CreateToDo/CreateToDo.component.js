import React, {useState} from 'react';
import './CreateToDo.styles.css'
import { v4 as uuidv4 } from 'uuid';
import { Fragment } from 'react/cjs/react.production.min';

const Createtodo = ({addTodo}) => {

    const [todos, setTodos] = useState({
        id: '',
        task:'',
        completed: '',
    })

    const handleChange = (e) => {
        setTodos({...todos, task: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todos.task.trim()) {
            addTodo({...todos, id: uuidv4()} )
            setTodos({...todos, task: ''})
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
            <input 
            onChange={handleChange}
            className="todo-Input" 
            type='text' 
            name='task'
            value={todos.task}
            placeholder="Create a new todo" />
            </form>
        </Fragment>
        
    )
    
    
    
}

export default Createtodo