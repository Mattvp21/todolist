
import './App.css';
import React, { useEffect, useState } from 'react'

import Createtodo from './components/CreateToDo/CreateToDo.component';
import StatusBar from './components/StatusBar/StatusBar.component';

import TodoList from './components/TodoList/TodoList.component';
import Toggle from './components/Toggle/Toggle.component';
import darkMode from './images/bg-desktop-dark.jpg';
import lightMode from './images/bg-desktop-light.jpg';


const ALL = 0;
const ACTIVE = 1;
const COMPLETED = 2;
const LOCAL_STORAGE_KEY = "react-todo-list-todos";
const LOCAL_STORAGE_KEY_2 = "react-todo-list-count";

function App() {

  const [todos, setTodos] = useState([]);
  let [count, setCount] = useState(0);
  const [check, setChecked] = useState({
    isChecked: false
});
const [tab, setTab] = useState(ALL);

// useEffect(() => {
//   // fires when app component mounts to the DOM
//   const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   if (storageTodos) {
//     setTodos(storageTodos);
    
//   }
// }, []);

// useEffect(() => {
//   // fires when todos array gets updated
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
// }, [todos]);



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
    setCount(count + 1)
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
      count={count}
      setCount={setCount}
        todos={visibleTodos}
      setTodos={setTodos} 
      handleComplete={handleComplete}
      check={check}
      isChecked={isChecked}
      />
      <StatusBar
      todosLength={count}
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
