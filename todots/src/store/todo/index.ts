export type Todo = {
    title: string
    body: string
    completed: boolean
}

export type TodoStoreState = {
    loading: boolean
    inventory: Todo[]
}

export const START_TODO_LOADING = 'START_TODO_LOADING'

type StartTodoLoadingAction = {
    type: typeof START_TODO_LOADING
}

export const RECEIVE_TODO_LIST = 'RECEIVE_TODO_LIST'

type ReceiveTodoListAction = {
    type: typeof RECEIVE_TODO_LIST
    payload: Todo[]
}

export const RECEIVE_TODO = 'RECEIVE_TODO'

type ReceiveTodoAction = {
    type: typeof RECEIVE_TODO
    payload: Todo
}

export type TodoActionType = ReceiveTodoListAction | ReceiveTodoAction | StartTodoLoadingAction