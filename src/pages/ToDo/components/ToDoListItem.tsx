import { ToDoListItemProps } from "../types";

const ToDoListItem: React.FC<ToDoListItemProps> = ({todo, toggleTask, removeTask}) => {
    return (
        <div key={todo.id} className = 'item-todo'>
            <div className={todo.completed? 'item-task-complete stroke': 'item-task-incomplete'}
                onClick = {() => toggleTask(todo.id)}
            >
                {todo.title}
            </div>
            <div>
                {todo.description}
            </div>
            <div className="item-delete" onClick={()=> removeTask(todo.id)}>
               X 
            </div>
        </div>

    )
}

export default ToDoListItem;