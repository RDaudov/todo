import { ToDo } from '../../../models/todo-items'
import './ToDoListItem.scss'

export const ToDoListItem = (props: {toDoItem: ToDo}) => {
    return (
        <li className="todo-list-item__wrapper">
            <span>{props.toDoItem.text}</span>
            <div className="todo-list-item__buttons">
                <button className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'}></button>
                <button className="btn-trash"></button>
             </div>
         </li>
    )
}