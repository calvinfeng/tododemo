export type Todo = {
    id: number
    title: string
    completed: boolean
}

export type TodoAction = StartTodoLoadingAction | 
                         StopTodoLoadingAction | 
                         FailTodoFetchingAction |
                         ReceiveTodoListAction | 
                         ReceiveTodoItemAction

export type TodoStoreState = {
    loading: boolean
    inventory: Todo[]
    error_message: string
}

// Use string literal to concretely define type
type StartTodoLoadingAction = {
    type: 'START_TODO_LOADING'
}

type StopTodoLoadingAction = {
    type: 'STOP_TODO_LOADING'
}

type FailTodoFetchingAction = {
    type: 'FAIL_TODO_FETCHING'
    message: string
}

type ReceiveTodoListAction = {
    type: 'RECEIVE_TODO_LIST'
    payload: Todo[]
}

type ReceiveTodoItemAction = {
    type: 'RECEIVE_TODO_ITEM'
    payload: Todo
}

export const START_TODO_LOADING = 'START_TODO_LOADING'
export const STOP_TODO_LOADING = 'STOP_TODO_LOADING'
export const FAIL_TODO_FETCHING = 'FAIL_TODO_FETCHING'
export const RECEIVE_TODO_ITEM = 'RECEIVE_TODO_ITEM'
export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST'