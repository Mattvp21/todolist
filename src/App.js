
import './App.css';
import React, { useState } from 'react'
import { Component } from 'react/cjs/react.production.min';
import Createtodo from './components/CreateToDo/CreateToDo.component';
import StatusBar from './components/StatusBar/StatusBar.component';
import Todo from './components/Todo/Todo.component';
import TodoList from './components/TodoList/TodoList.component';
import Toggle from './components/Toggle/Toggle.component';

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }
  return(
    <div className='wrapper'>
      <div className='container'>
      <Toggle/>
      <Createtodo addTodo={addTodo}/>
      <TodoList  todos={todos}/>
      <StatusBar />

      </div>
     
    </div>

  )

}


export default App;
