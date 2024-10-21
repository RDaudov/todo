import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404";
import { ViewList } from "./pages/ViewList";
import { ViewListItem } from "./pages/ViewListItem";
import { ToDoListPage } from "./pages/ToDoListPage";
import { ToDo } from "./models/todo-items";
import path from "path";

const todos: ToDo[] = [
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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <ToDoListPage /> },
      { path: '/list', element: <ViewList todos={todos} />, },
      { path: '/list/id', element: <ViewListItem todos={todos} /> }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])