
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

// Wrap createStore with middlewares and produce one final createStore
const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware))(createStore)

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <Index />
    </Provider>, document.getElementById("react-application"))
})