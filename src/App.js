
import './App.css';
import React, { useState } from 'react'

import Createtodo from './components/CreateToDo/CreateToDo.component';
import StatusBar from './components/StatusBar/StatusBar.component';

import TodoList from './components/TodoList/TodoList.component';
import Toggle from './components/Toggle/Toggle.component';
import darkMode from './images/bg-desktop-dark.jpg';
import lightMode from './images/bg-desktop-light.jpg';
function App() {

  const [todos, setTodos] = useState([]);
  const [check, setChecked] = useState({
    isChecked: false
});
  


const isChecked = (e) => {
    let checkedBox = e.target;
    
      if(checkedBox.checked) {
        setChecked({check, isChecked:true})
    } else {
        setChecked({check, isChecked:false})
    }    
    
}

const handleComplete = (id) => {
  setTodos(
    todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed:!todo.completed
        }
      }
      return todo
    })
  )
}


  

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  
  
  return(
  <main style={{backgroundColor: check.isChecked ? 'white' : 'hsl(235, 21%, 11%)',
               backgroundImage: check.isChecked ? `url(${lightMode})` : `url(${darkMode})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100% -20%',
                display: 'flex',
                justifyContent: 'center',
                transition: 'ease-in .3s'
               }
            }>
   
    <div className='wrapper'>
            
      <div className='container'>
      <Toggle 
      check={check}
      setChecked={setChecked}
      isChecked={isChecked}/>
      <Createtodo 
      check={check}
      isChecked={isChecked}
      addTodo={addTodo}/>
      <TodoList 
      setTodos={setTodos} 
      handleComplete={handleComplete}
      check={check}
      isChecked={isChecked}
      todos={todos}/>
      <StatusBar
      
      check={check}
      setChecked={setChecked}
      isChecked={isChecked} />

      </div>
     
    </div>

  </main>
    

  )

}


export default App;
