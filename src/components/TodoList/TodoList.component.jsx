import React from 'react';
import Todo from '../Todo/Todo.component';



const TodoList = ({todos, check,count, setCount,handleComplete}) => {
    return (

        <div className='list'>
<<<<<<< HEAD
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
=======
>>>>>>> 4446e0ecbea0a529fe43ced2e831321c69bc03e4

           {
               todos.map((todo, i) => (
               
                <Todo 
                    check={check}                
                    key={i} 
                    todo={todo}
                    handleComplete={handleComplete}              
                />
                )
            )}         
        
        </div>
        
    )
}

export default TodoList; 