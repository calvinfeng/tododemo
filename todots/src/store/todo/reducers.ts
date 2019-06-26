import { TodoStoreState, TodoActionType, RECEIVE_TODO, RECEIVE_TODO_LIST, START_TODO_LOADING } from '.'

const initial: TodoStoreState = {
    loading: false,
    inventory: []
}

export function todoReducer(state=initial, action: TodoActionType): TodoStoreState {
    switch (action.type) {
        case RECEIVE_TODO:
            return Object.assign({}, state, {
                inventory: [...state.inventory, action.payload],
                loading: false
            })
        case RECEIVE_TODO_LIST:
            return Object.assign({}, state, {
                inventory: action.payload,
                loading: false
            })
        case START_TODO_LOADING:
            return Object.assign({}, state, {
                loading: true 
            })
        default:
            return state
    }
}

