import { ToDo } from "../../models/todo-items"
import { ToDoListItem } from "./ToDoListItem/ToDoListItem"

export const ToDoList = (props: { items: ToDo[], updateToDo: Function, deleteToDo: Function }) => {

    const checkedList = () => props.items
        .filter((item) => item.isDone)
        .map((item, idx) => {
            return (
                <ToDoListItem
                    toDoItem={item}
                    key={idx}
                    updateToDo={props.updateToDo}
                    deleteToDo={props.deleteToDo}
                />
            )
        })

    const uncheckedList = () => props.items
        .filter((item) => !item.isDone)
        .map((item, idx) => {
            return (
                <ToDoListItem
                    toDoItem={item}
                    key={idx}
                    updateToDo={props.updateToDo}
                    deleteToDo={props.deleteToDo}
                />
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