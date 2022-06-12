import React from 'react';
import Todo from '../Todo/Todo.component';



const TodoList = ({todos, check,count, setCount,handleComplete}) => {
    return (

        <div className='list'>
            <ul >
           {todos.map((todo, i) => {
               
               return <Todo check={check} 
               count={count}
               setCount={setCount}
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