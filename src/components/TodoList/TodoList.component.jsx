import React from 'react';
import Todo from '../Todo/Todo.component';



const TodoList = ({todos, check, isChecked, setTodos, handleComplete, visableTodos}) => {
    return (

        <div className='list'>
            <ul >
           {todos.map((todo, i) => {
               
               return <Todo check={check} 
               
               key={[i]} 
               todo={todo}
               handleComplete={handleComplete}
                
                
               />
           })}
            
            </ul>

        </div>
        
    )
}

export default TodoList; 