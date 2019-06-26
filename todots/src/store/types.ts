export type Todo = {
    title: string
    body: string
    completed: boolean
}

export type TodoStoreState = {
    inventory: Todo[]
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

export type TodoActionType = ReceiveTodoListAction | ReceiveTodoAction