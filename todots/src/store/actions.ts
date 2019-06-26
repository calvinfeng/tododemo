import { Todo, RECEIVE_TODO, RECEIVE_TODO_LIST, TodoActionType} from './types'

export function storeReceiveTodo(newTodo: Todo): TodoActionType {
    return {
        type: RECEIVE_TODO,
        payload: newTodo
    }
}

export function storeReceiveTodoList(newTodoList: Todo[]): TodoActionType {
    return {
        type: RECEIVE_TODO_LIST,
        payload: newTodoList
    }
}
