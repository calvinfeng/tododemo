import axios from 'axios'
import '@babel/polyfill'

export const START_TODO_LOADING = 'START_TODO_LOADING'
export const STOP_TODO_LOADING = 'STOP_TODO_LOADING'
export const FAIL_TODO_FETCHING = 'FAIL_TODO_FETCHING'
export const RECEIVE_TODO_ITEM = 'RECEIVE_TODO_ITEM'
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST'

export const fetchTodoItem = (id) => async (dispatch) => {
    dispatch({ type: START_TODO_LOADING })

    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        dispatch({
            type: RECEIVE_TODO_ITEM,
            payload: res.data
        })

    } catch {
        dispatch({
            type: FAIL_TODO_FETCHING,
            message: "failed to fetch todo item from jsonplaceholder.com"
        })
    }

    dispatch({ type: STOP_TODO_LOADING })
}

export const fetchTodoList = () => async (dispatch) => {
    dispatch({ type: START_TODO_LOADING })

    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
        dispatch({
            type: RECEIVE_TODO_LIST,
            payload: res.data
        })
    } catch {
        dispatch({
            type: FAIL_TODO_FETCHING,
            message: "failed to fetch todo list from jsonplaceholder.com"
        })
    }

    dispatch({ type: STOP_TODO_LOADING })
}
