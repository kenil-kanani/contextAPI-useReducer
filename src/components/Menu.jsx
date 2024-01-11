import { MenuItem } from './index'
import '../styles/Menu.css';
import { useContext } from 'react';
import TodoContext from '../context/TodoContext';

export default function Menu({ setIsListView, setIsCardView, setIsModerateView }) {

    const { isListView, isCardView, isModerateView } = useContext(TodoContext)
    return (
        <div className='menu'>
            <MenuItem text='List View' isBackgroundWhite={isListView} setIsListView={setIsListView} setIsCardView={setIsCardView} setIsModerateView={setIsModerateView} />
            <MenuItem text='Card View' isBackgroundWhite={isCardView} setIsListView={setIsListView} setIsCardView={setIsCardView} setIsModerateView={setIsModerateView} />
            <MenuItem text='Moderate View' isBackgroundWhite={isModerateView} setIsListView={setIsListView} setIsCardView={setIsCardView} setIsModerateView={setIsModerateView} />
        </div>
    )
}
