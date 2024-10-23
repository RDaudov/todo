import { useEffect, useState } from "react"
import { ToDo } from "../models/todo-items"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store"

export const ViewListItem = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const { id } = useParams()
    const navigate = useNavigate()
    const [todo, setToDo] = useState<ToDo>()


    useEffect(() => {
        const searchToDo = todoList.find((todo) => String(todo.id) === id)

        if (searchToDo) {
            setToDo(searchToDo)
        } else {
            navigate('/404')
        }
    },[todoList, id, navigate])



    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    )
}