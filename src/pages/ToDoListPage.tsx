import { useState } from "react"
import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDoList"
import { ToDo } from "../models/todo-item"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

export const ToDoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);
    
    const createNewToDo = (text: string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false
        }
        setTodos([...todos, newToDo])
    }

    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if(todo.id === toDoItem.id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        })
        setTodos(newTodos);
        toast(`Задача ${toDoItem.text} изменена`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((todo) => todo.id !== toDoItem.id);
        setTodos(newTodos);
        toast(`Задача ${toDoItem.text} удалена`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    return (
        <>
            <Header />
            <Form createNewToDo={ createNewToDo } />
            <ToDoList todos={todos} updateToDo={ updateToDo } deleteToDo={ deleteToDo } />
        </>
    )
}