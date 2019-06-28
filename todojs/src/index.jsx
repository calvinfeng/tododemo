import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'

import { rootReducer } from './store'
import TodoContainer from './containers/todo_container'
import './index.scss'

class Index extends React.Component {
    render() {
        return (
            <section>
                <h1>Index Page</h1>
                <TodoContainer />
            </section>
        )
    }
}

const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware))(createStore)

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(rootReducer)}>
            <Index />
        </Provider>, document.getElementById('react-application'))
})