import { useContext } from 'react'
import { ListView, CardView, ModerateView } from '../components/index'
import '../styles/TodoList.css'
import TodoContext from '../context/TodoContext'

export default function TodoList() {
    const { isListView, isCardView, isModerateView, list } = useContext(TodoContext)
    return (
        <>
            {isListView && <h1 className='list-text'>ListView</h1>}
            {isCardView && <h1 className='list-text'>CardView</h1>}
            {isModerateView && <h1 className='list-text'>ModerateView</h1>}
            <div className='todo-list'>
                {isListView && list.map((item) => <ListView key={item.id} title={item.title} />)}
                {isCardView && list.map((item) => <CardView key={item.id} title={item.title} description={item.description} id={item.id} />)}
                {isModerateView && list.map((item) => <ModerateView key={item.id} title={item.title} description={item.description} />)}
            </div>
        </>
    )
}
