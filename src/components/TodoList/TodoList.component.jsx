import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Todo from '../Todo/Todo.component';



const TodoList = ({todos}) => {
    return (
        <div className='list'>
            <ul >
           {todos.map((todo, i) => {
               return <Todo key={[i]} todo={todo} />
           })}
            
            </ul>

        </div>
        
    )
}

export default TodoList; 