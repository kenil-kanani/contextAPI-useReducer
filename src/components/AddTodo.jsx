import { useContext, useId, useState } from 'react';
import TodoContext from '../context/TodoContext';

export function AddTodo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const id = useId();

    const { todoDispatch } = useContext(TodoContext)

    return (
        <div className='add-todo'>
            <input className='add-title' type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className='add-description' type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className='add-task' onClick={(e) => {
                e.preventDefault();
                if (!title || !description) return;
                todoDispatch({ type: 'add_todo', payload: { id, title, description } })
                setTitle('');
                setDescription('');
            }}>Add Task</button>
        </div>
    )
}