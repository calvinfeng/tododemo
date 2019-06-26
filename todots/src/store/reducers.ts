import { TodoStoreState, TodoActionType, RECEIVE_TODO, RECEIVE_TODO_LIST } from './types'
import { combineReducers } from 'redux'

const initial: TodoStoreState = {
    inventory: []
}

function todoReducer(state=initial, action: TodoActionType): TodoStoreState {
    switch (action.type) {
        case RECEIVE_TODO:
            return {
                inventory: [...state.inventory, action.payload]
            }
        case RECEIVE_TODO_LIST:
            return {
                inventory: action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    "todo": todoReducer
})

// ReturnType extracts the type of the return of a function. Root reducer is a function.
export type AppState = ReturnType<typeof rootReducer>

