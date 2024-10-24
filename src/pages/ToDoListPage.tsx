import { Form } from "../components/Form/Form";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-items";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { createAction, deleteAction, updateAction } from "../feature/todoList";
import { setValueAction } from "../feature/todoText";

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos)
    const text = useSelector((state: RootState) => state.form.text)
    const dispatch = useDispatch()

    const createNewToDo = (text: string) => {
        dispatch(createAction(text))
    }

    const updateToDo = (toDoItem: ToDo) => {
        dispatch(updateAction(toDoItem))
    }

    const deleteToDo = (toDoItem: ToDo) => {
        dispatch(deleteAction(toDoItem))
    }

    const setValue = (text: string) => {
        dispatch(setValueAction(text))
    }

    return (
        <>
            <Form text={text} createNewToDo={createNewToDo} setValue={setValue} />
            <ToDoList
                items={todoList}
                updateToDo={updateToDo}
                deleteToDo={deleteToDo}
            />
            <ToastContainer pauseOnFocusLoss={false} />
        </>
    );
}