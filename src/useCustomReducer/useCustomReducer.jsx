import { useState } from 'react'

export function useCustomReducer(reducerFunction, initialState) {
    const [state, setState] = useState(initialState)

    const dispatch = (action) => {
        setState(reducerFunction(state, action))
    }
    return [state, dispatch]
}