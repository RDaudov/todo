import { ToDo } from "../../models/todo-items"
import { ToDoListItem } from "./ToDoListItem/ToDoListItem"

export const ToDoList = (props: {items: ToDo[]}) => {

    const checkedList = () => props.items
        .filter((item) => item.isDone)
        .map((item, idx) => {
            return (
                <ToDoListItem toDoItem={item} key={idx} />
            )
        })

    const uncheckedList = () => props.items
        .filter((item) => !item.isDone)
        .map((item, idx) => {
            return (
                <ToDoListItem toDoItem={item} key={idx} />
            )
        })

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {uncheckedList()}
            </ul>
            <ul className="todo-list completed">
                {checkedList()}
            </ul>
        </div>
    )
}