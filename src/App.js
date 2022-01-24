
import './App.css';
import React from 'react'
import { Component } from 'react/cjs/react.production.min';
import Createtodo from './components/CreateToDo/CreateToDo.component';
import StatusBar from './components/StatusBar/StatusBar.component';
import Todo from './components/Todo/Todo.component';
import TodoList from './components/TodoList/TodoList.component';
import Toggle from './components/Toggle/Toggle.component';
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos : [],
      toDoInput: ''
    }
  }

  handleChange = (event) => {
      let toDo = event.target.value
      this.setState({toDoInput: toDo})
      console.log(toDo)
  }

  handleClick = (event) => {
    let click = event.target.value;
    if(click === '') {
      return
    } else {
      this.setState({todos: this.toDoInput})
    }
    console.log(click)
    
  } 



render() {
  const {todos, toDoInput} = this.state;
  return (
    <div className='wrapper'>
      <div className='container'>
      
      
      
      <Toggle/>
      <Createtodo pushTodo={this.handleClick} newTodo={this.handleChange}/>
      <TodoList  todos={todos}/>
      <StatusBar />

      </div>
     
    </div>

  )

}
}

export default App;
