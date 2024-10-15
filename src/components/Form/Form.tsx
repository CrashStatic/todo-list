import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { FormWrapper, FormBlock, FormLabel, FormField, FormControl } from './Form.styled';

import plusIcon from '../../assets/images/plus.png';

export const Form = (props: { createNewToDo: Function }) => {
    const [text, setText] = useState<string>('');

    const formSumbit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        if (text) {
            props.createNewToDo(text);
            setText('');
        }
    }

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSumbit}>
                <FormLabel>
                    <FormField type="text" value={text} onChange={(e) => setText(e.target.value)} />
                    <FormControl icon={plusIcon}/>
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}