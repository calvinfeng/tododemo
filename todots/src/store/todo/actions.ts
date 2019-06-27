import { RECEIVE_TODO_ITEM, RECEIVE_TODO_LIST, START_TODO_LOADING, STOP_TODO_LOADING, FAIL_TODO_FETCHING} from '.'
import { Todo, TodoAction } from '.'
import { StoreState } from '../../store'
import { ThunkDispatch } from 'redux-thunk'
import axios, { AxiosResponse } from 'axios'

export const fetchTodoItem = (id: number) => async (dispatch: ThunkDispatch<StoreState, undefined, TodoAction>) => {
    dispatch({ type: START_TODO_LOADING })

    try {
        const res: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
        console.log(res.data)
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

export const fetchTodoList = () => async (dispatch: ThunkDispatch<StoreState, undefined, TodoAction>) => {
    dispatch({ type: START_TODO_LOADING })

    try {
        const res: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
        console.log(res.data)
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
