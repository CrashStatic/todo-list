import { useSelector } from 'react-redux';
import { ListItem } from '../components/ListItem/ListItem'
import { RootState } from '../store';
import { ToDo } from '../models/todo-item';

export const ViewList = () => {
    const todoList = useSelector((state: RootState) => state.todoList.todos);
    
    return (
        <div className='container'>
        {
            todoList.map((todo: ToDo) => {
                return (<ListItem todo={todo} key={todo.id}/>)
            })
        }
        </div>
    )
}