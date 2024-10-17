import styled from 'styled-components';

const ToDoList = styled.ul `
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding-left: 0;
    list-style: none;
`

export const ToDoListContainer = styled.div`
    width: 100%;
    padding: 15px;
`

export const ToDoFailedList = styled(ToDoList)`
    &:empty:after {
        content: 'Нет задач на выполнение';
    }

    &:after {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
    }
    
    &:before {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
    }
`

export const ToDoCompletedList = styled(ToDoList)`
    position: relative;
    padding: 60px 0 0 0;

    &:empty:after {
    content: 'Нет выполненых задач';
    }

    &:before {
    content: '';
    width: 150px;
    height: 1px;
    background: #d8e5e0;

    position: absolute;
    top: 25px;
    left: calc(50% - 75px);
    }

    &:after {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 12px;
    color: #aaa;
    }
`