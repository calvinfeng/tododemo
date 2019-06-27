import { RECEIVE_TODO_LIST, START_TODO_LOADING, RECEIVE_TODO_ITEM, STOP_TODO_LOADING, FAIL_TODO_FETCHING } from '.'
import { TodoStoreState, TodoAction } from '.'

const initial: TodoStoreState = {
    loading: false,
    error_message: "",
    inventory: []
}

export function todoReducer(state=initial, action: TodoAction): TodoStoreState {
    switch (action.type) {
        case START_TODO_LOADING:
            return Object.assign({}, state, {
                loading: true 
            })
        case STOP_TODO_LOADING:
            return Object.assign({}, state, {
                loading: false 
            })
        case FAIL_TODO_FETCHING:
            return Object.assign({}, state, {
                error_message: action.message
            })
        case RECEIVE_TODO_ITEM:
            return Object.assign({}, state, {
                inventory: [...state.inventory, action.payload],
                error_message: ""
            })
        case RECEIVE_TODO_LIST:
            return Object.assign({}, state, {
                inventory: action.payload,
                error_message: ""
            })

        default:
            return state
    }
}

