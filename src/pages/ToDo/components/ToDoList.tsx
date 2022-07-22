import { useState } from "react";
import { ToDoInterface } from "../interfaces";
import { ToDoListProps } from "../types";
import ToDoForm from "./ToDoForm";
import ToDoListItem from "./ToDoListItem";

const ToDoList: React.FC<ToDoListProps> = () => {
   
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
        <>
          <h1>ToDo List: {todos.length} tasks </h1>
          <ToDoForm addTask = {addTask} />
          {todos.map((todo: ToDoInterface) => (
            <ToDoListItem key={todo.id} 
                            todo={todo} 
                            toggleTask = {handleToggle} 
                            removeTask={removeTask}
            />
        ))}
        </>
    )
}

export default ToDoList;