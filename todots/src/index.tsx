
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'
import { Provider } from 'react-redux'
import TodoContainer from './containers/todo_container'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './store'

type ComponentProps = {}
type ComponentState = {}

class Index extends React.Component<ComponentProps, ComponentState> {
    render() {
        return (
            <section>
                <h1>Index Page</h1>
                <TodoContainer />
            </section>
        )
    }
}

// ? I'd expect that I create store with root reducer, why am I passing it?
// This is how I would see it, createStore(rootReducer), pass into compose.
const store = compose(applyMiddleware(thunkMiddleware))(createStore)(rootReducer)

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById("react-application"))
})