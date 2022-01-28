
import './App.css';
import React, { useState } from 'react'

import Createtodo from './components/CreateToDo/CreateToDo.component';
import StatusBar from './components/StatusBar/StatusBar.component';

import TodoList from './components/TodoList/TodoList.component';
import Toggle from './components/Toggle/Toggle.component';
import darkMode from './images/bg-desktop-dark.jpg';
import lightMode from './images/bg-desktop-light.jpg';


const ALL = 0;
const ACTIVE = 1;
const COMPLETED = 2;

function App() {

  const [todos, setTodos] = useState([]);
  const [check, setChecked] = useState({
    isChecked: false
});
const [tab, setTab] = useState(ALL);

const visibleTodos = todos.filter((todo) => {
  switch (tab) {
    case ACTIVE:
      return !todo.completed;
    case COMPLETED:
      return todo.completed;
    default:
      return todo;
  }
});

const handleCompleteButton = () => {
  setTab(COMPLETED);
};

const handleActiveButton = () => {
  setTab(ACTIVE);
};

const handleAllButton = () => {
  setTab(ALL);
};

const clearCompleted = () => {
  setTodos(todos.filter((todo) => todo.completed === false))
}

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
                }
    >
    
      <div className='wrapper'>
              
        <div className='container'>

          <Toggle 
          check={check}
          setChecked={setChecked}
          isChecked={isChecked}        
          />

          <Createtodo 
            check={check}
            isChecked={isChecked}
            addTodo={addTodo}            
          />

          <TodoList 
            todos={visibleTodos}
            setTodos={setTodos} 
            handleComplete={handleComplete}
            check={check}
            isChecked={isChecked}
          />

          <StatusBar
            todosLength={todos.length}
            check={check}
            handleAllButton={handleAllButton}
            handleCompleteButton={handleCompleteButton}
            handleActiveButton={handleActiveButton}
            clearCompleted={clearCompleted}
          />
        
        </div>
      
      </div>

    </main>
    

  )

}


export default App;
