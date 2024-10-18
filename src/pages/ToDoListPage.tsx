import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDo } from "../models/todo-items";

export const ToDoListPage = () => {
    const items: ToDo[] = [
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
    ]
    return (
        <>
            <Header />
            <Form />
            <ToDoList items={items}/>
        </>
    );
}