import React from 'react';
import Todo from '../Todo/Todo.component';



const TodoList = ({todos, check, isChecked, setTodos, handleComplete}) => {
    return (

        <div className='list'>

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