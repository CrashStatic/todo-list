import { Form } from '../components/Form/Form'
import { ToDoList } from '../components/ToDoList/ToDoList'
import { ToDo } from '../models/todo-item'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { createAction, deleteAction, updateAction } from '../feature/todoList';

export const ToDoListPage = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos);
    const dispatch = useDispatch();

    const createNewToDo = (text: string) => {
        dispatch(createAction(text));
        toast(`Задача ${text} добавлена`, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }

    const updateToDo = (toDoItem: ToDo) => {
        dispatch(updateAction(toDoItem));
        toast(`Задача ${toDoItem.text} изменена`, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }

    const deleteToDo = (toDoItem: ToDo) => {
        dispatch(deleteAction(toDoItem));
        toast(`Задача ${toDoItem.text} удалена`, {
            position: 'bottom-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    }

    return (
        <>
            <Form createNewToDo={createNewToDo} />
            <ToDoList todos={todoList} updateToDo={updateToDo} deleteToDo={deleteToDo} />
        </>
    )
}