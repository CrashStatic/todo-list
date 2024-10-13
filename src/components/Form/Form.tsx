import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.scss';

export const Form = (props: { createNewToDo: Function }) => {
    const [text, setText] = useState<string>('');

    const formSumbit = () => {
        if (text) {
            props.createNewToDo(text);
            setText('');
            toast.success('Добавлена новая задача');
        }
    }

    return (
        <div className="form-wrapper">
            <form action="#" onSubmit={formSumbit}>
                <label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <button></button>
                </label>
            </form>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}