import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './Form.scss';

export const Form = (props: { createNewToDo: Function }) => {
    const [text, setText] = useState<string>('');

    const formSumbit = () => {
        if (text) {
            props.createNewToDo(text);
            setText('');
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
        </div>
    )
}