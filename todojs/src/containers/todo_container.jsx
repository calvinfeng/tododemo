import React from 'react'
import { connect } from 'react-redux'
import { fetchTodoItem, fetchTodoList } from '../store/todo/actions'

class TodoContainer extends React.Component {
    get loadingStatus() {
        if (this.props.loading) {
            return <p>loading todos</p>
        }

        return
    }

    get todos() {
        return (
            <section>
                <h2>Completed</h2>
                <ul>
                {
                    this.props.todos.filter((todo) => todo.completed).map((todo) =>{
                        return <li key={todo.id}>{todo.id}: {todo.title}</li>
                    })
                }
                </ul>
                <h2>Incomplete</h2>
                <ul>
                {
                    this.props.todos.filter((todo) => !todo.completed).map((todo) =>{
                    return <li key={todo.id}>{todo.id}: {todo.title}</li>
                    })
                }
                </ul>
            </section>
        )
    }

    componentDidMount() {
        this.props.dispatchFetchTodoList()
    }

    render() {
        return (
            <section>
                <h1>Todos</h1>
                {this.loadingStatus}
                {this.todos}
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.todo.loading,
        todos: state.todo.inventory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchTodoItem: (id) => dispatch(fetchTodoItem(id)),
        dispatchFetchTodoList: () => dispatch(fetchTodoList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)