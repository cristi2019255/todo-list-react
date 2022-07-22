
import {useState} from 'react'
import { ToDoInterface } from '../interfaces'
import { ToDoFormProps } from '../types'


const ToDoForm: React.FC<ToDoFormProps> = ({addTask}) => {
    const input: ToDoInterface = {
        id: 0,
        title: '',
        completed: false,
        description: ''
    }
    const [userInput, setUserInput] = useState(input)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput(input)
    }

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput({...userInput, title: e.target.value})
    }
    const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput({...userInput, description: e.target.value})
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask(userInput)
            setUserInput(input)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
                <input 
                    value={userInput.title}
                    type="text"
                    onChange={handleChangeTitle}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a task"
                />
                <input
                    value={userInput.description}
                    type="text"
                    onChange={handleChangeDescription}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a description (optional)"
                />
                <button type="submit">Add task</button>
            </form>
    )
}

export default ToDoForm;