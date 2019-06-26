import { RECEIVE_TODO, RECEIVE_TODO_LIST, START_TODO_LOADING} from '.'
import { TodoActionType } from '.'

export const fetchTodoFromServer = () => (dispatch) => {
    const loadingAction: TodoActionType = {
        type: START_TODO_LOADING
    }

    dispatch(loadingAction)

    setTimeout(() => {
        const receiveTodoAction: TodoActionType = {
            type: RECEIVE_TODO,
            payload: {"title": "Hello World", "body": "say hello to world", "completed": true}
        }

        dispatch(receiveTodoAction)
    }, 1000)
}

export const fetchTodoListFromServer = () => (dispatch) => {
    const loadingAtion: TodoActionType = {
        type: START_TODO_LOADING
    }

    dispatch(loadingAtion)

    setTimeout(() => {
        const receiveTodoListAction: TodoActionType = {
            type: RECEIVE_TODO_LIST,
            payload: [
                {"title": "Hello World", "body": "say hello to world", "completed": true},
                {"title": "Bye World", "body": "say bye to world", "completed": false}
            ]
        }
    })
}
