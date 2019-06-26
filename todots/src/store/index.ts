import { combineReducers } from 'redux'
import { todoReducer } from './todo/reducers'

export const rootReducer = combineReducers({
    "todo": todoReducer
})

// ReturnType extracts the type of the return of a function. Root reducer is a function.
export type StoreState = ReturnType<typeof rootReducer>
