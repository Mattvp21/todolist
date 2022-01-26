import React from 'react';
import Todo from '../Todo/Todo.component';



const TodoList = ({todos, check, isChecked, setTodos}) => {
    return (

        <div className='list'>
            <ul >
           {todos.map((todo, i) => {
               
               return <Todo check={check} 
               isChecked={isChecked} 
               key={[i]} 
               todo={todo}
              
                setTodos={setTodos}
               />
           })}
            
            </ul>

        </div>
        
    )
}

export default TodoList; 