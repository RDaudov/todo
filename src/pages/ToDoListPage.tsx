import { useState } from "react";
import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-items";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([
        {
            id: 1,
            text: "text1",
            isDone: false
        },
        {
            id: 2,
            text: "text2",
            isDone: false
        },
        {
            id: 3,
            text: "text3",
            isDone: true
        },
    ])

    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
        toast.success('Новая задача создана', {position: "bottom-right"})
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newToDos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newToDos)
        toast.success('Статус задачи изменен', {position: "bottom-right"})
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newToDos = todos.filter((todo) => toDoItem.id != todo.id)
        setTodos(newToDos)
        toast.success('Задача удалена', {position: "bottom-right"})
    }

    return (
        <>
            <Header />
            <Form createNewToDo={createNewToDo} />
            <ToDoList
                items={todos}
                updateToDo={updateToDo}
                deleteToDo={deleteToDo}
            />
            <ToastContainer />
        </>
    );
}