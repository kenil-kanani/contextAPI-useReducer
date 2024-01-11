export default function TodoReducer(state, action) {
    if (action.type === 'add_todo') {
        return [
            ...state,
            {
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                isCompleted: false
            }
        ]
    } else if (action.type === 'edit_todo') {
        return state.map((item) => {
            if (item.id === action.payload.id) {
                return { ...item, title: action.payload.title, description: action.payload.description };
            }
            return item;
        })
    } else if (action.type === 'delete_todo') {
        return state.filter((item) => item.id !== action.payload.id)
    } else return state
}