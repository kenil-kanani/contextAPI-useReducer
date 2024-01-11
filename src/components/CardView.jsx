import { useContext, useState } from 'react';
import '../styles/CardView.css';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import TodoContext from '../context/TodoContext';

export default function CardView({ title, description, id }) {
    const { todoDispatch } = useContext(TodoContext)
    const [isEditing, setIsEditing] = useState();
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    return (
        <div className="card-view">
            {isEditing ?
                (<input className='card-input' value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />)
                : (<h2 className='card-title'>{title}</h2>)
            }
            {isEditing ? (
                <textarea className='card-textarea' value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
            ) :
                (<p className='card-description'>{description}</p>)
            }

            <div className='card-view-icons'>
                <CiEdit size={30} style={{ display: isEditing ? 'none' : 'block' }} cursor={'pointer'} onClick={(e) => {
                    e.preventDefault();
                    setIsEditing(true);
                }} />

                <div className='save-btn' style={{ display: isEditing ? 'block' : 'none' }} onClick={(e) => {
                    e.preventDefault();
                    setIsEditing(false);
                    todoDispatch({ type: 'edit_todo', payload: { id, title: newTitle, description: newDescription } })
                }}>Save</div>

                <MdDelete size={30} cursor={'pointer'} onClick={(e) => {
                    e.preventDefault();
                    todoDispatch({ type: 'delete_todo', payload: { id } })
                }} />
            </div>
        </div >
    )
}
