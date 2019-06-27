import * as React from 'react'
import { connect} from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'

import { StoreState } from '../store'
import { Todo, TodoAction } from '../store/todo'
import { fetchTodoItem, fetchTodoList } from '../store/todo/actions'

type StoreProps = {
    todos: Todo[]
    loading: boolean
}

type DispatchProps = {
    dispatchFetchTodoItem: (id: number) => void
    dispatchFetchTodoList: () => void
}

type ComponentProps = {}

type Props = StoreProps & DispatchProps & ComponentProps

type State = {}

class TodoContainer extends React.Component<Props, State> {
    componentDidMount() {
        // this.props.dispatchFetchTodoItem(1)
        this.props.dispatchFetchTodoList()
    }

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

const mapStateToProps = (state: StoreState): StoreProps => {
    return {
        loading: state.todo.loading,
        todos: state.todo.inventory
    }   
}

const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, undefined, TodoAction>, props: ComponentProps): DispatchProps => {
    return {
        dispatchFetchTodoItem: (id: number) => dispatch(fetchTodoItem(id)),
        dispatchFetchTodoList: () => dispatch(fetchTodoList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)

