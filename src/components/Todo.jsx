import { useReducer, useState } from 'react';
import { useCustomReducer } from '../useCustomReducer/useCustomReducer'
import '../styles/Todo.css';
import { Menu, TodoList } from '../components/index';
import TodoContext from '../context/TodoContext';
import { AddTodo } from './AddTodo';
import TodoReducer from '../reducers/TodoReducer';
import { dummyList } from '../utils/dummyList'

export default function Todo() {
    const [isListView, setIsListView] = useState((localStorage.getItem('isListView') !== null && localStorage.getItem('isListView') !== undefined) ? (localStorage.getItem('isListView') === 'true' ? true : false) : false);
    const [isCardView, setIsCardView] = useState((localStorage.getItem('isCardView') !== null && localStorage.getItem('isCardView') !== undefined) ? (localStorage.getItem('isCardView') === 'true' ? true : false) : true);
    const [isModerateView, setIsModerateView] = useState((localStorage.getItem('isModerateView') !== null && localStorage.getItem('isModerateView') !== undefined) ? (localStorage.getItem('isModerateView') === 'true' ? true : false) : false);
    const [list, todoDispatch] = useCustomReducer(TodoReducer, dummyList) // takes two arguments, first is the reducer function and second is the initial state

    return (
        <TodoContext.Provider value={{ isListView, isCardView, isModerateView, list, todoDispatch }}>
            <div className='todo'>
                <h1 className='tasksmart'>TaskSmart</h1>
                <Menu setIsListView={setIsListView} setIsCardView={setIsCardView} setIsModerateView={setIsModerateView} />
                <AddTodo />
                <TodoList />
            </div>
        </TodoContext.Provider>
    )
} 