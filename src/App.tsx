import React from 'react';
import './App.css';
import { useState } from 'react';
import {ToDoList, ToDoListItem} from './components'
import ToDoInterface from './interfaces/ToDo';


function App() {
  const initialTasks: ToDoInterface[] = []
  const [todos, setToDos] = useState(initialTasks)
  
  const addTask = (task: ToDoInterface) => {
    if (task){
      const id = todos.length + 1
      task.id = id
      setToDos([...todos, task])
    }
  }

  const removeTask = (id: number) => {
    setToDos(todos.filter(todo => todo.id !== id))
  }


  const handleToggle = (id: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }
    )
    setToDos(newTodos)
  }

  return (
    <div className="App">
      <header>
        <h1>ToDo List: {todos.length} tasks </h1>
      </header>
      <ToDoList addTask = {addTask}>
        {todos.map((todo: ToDoInterface) => (
          <ToDoListItem key={todo.id} 
                        todo={todo} 
                        toggleTask = {handleToggle} 
                        removeTask={removeTask}
          />
        ))}
      </ToDoList>
    </div>
  );
}

export default App;
