import React from 'react';
import Todo from '../Todo/Todo.component';



const TodoList = ({todos, check, isChecked, setTodos, handleComplete}) => {
    return (

        <div className='list'>
            <ul >
           {todos.map((todo, i) => {
               
               return <Todo check={check} 
               isChecked={isChecked} 
               key={[i]} 
               todo={todo}
               handleComplete={handleComplete}
                setTodos={setTodos}
                
               />
           })}
            
            </ul>

        </div>
        
    )
}

export default TodoList; 