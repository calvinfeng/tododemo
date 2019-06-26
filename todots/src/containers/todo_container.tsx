import * as React from 'react'
import { connect} from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'

import { StoreState } from '../store'
import { Todo } from '../store/todo'
import { fetchTodoFromServer } from '../store/todo/actions'

// ? I learned this style from Redux tutorials, where they break props into three distinct types.
// ? Is this good?
type StoreProps = {
    todos: Todo[]
    loading: boolean
}

type DispatchProps = {
    dispatchFetchTodoFromServer: Function
}

type ComponentProps = {

}

type Props = StoreProps & DispatchProps & ComponentProps
type State = {}

const mapStateToProps = (state: StoreState): StoreProps => {
    return {
        loading: state.todo.loading,
        todos: state.todo.inventory
    }   
}

// ? Why is it requiring component props, aka ownProps? I want to put in Props.
const mapDispatchToProps = (dispatch: ThunkDispatch<StoreState, undefined, Action>, ownProps: ComponentProps): DispatchProps => {
    return {
        dispatchFetchTodoFromServer: () => dispatch(fetchTodoFromServer())
    }
}

class TodoContainer extends React.Component<Props, State> {
    componentDidMount() {
        this.props.dispatchFetchTodoFromServer()
    }

    get loadingStatus() {
        if (this.props.loading) {
            return <p>loading todos</p>
        }

        return
    }

    get todos() {
        return <ol>
            {this.props.todos.map((todo) => {
                return <li key={1}>{todo.title}: {todo.body} {todo.completed}</li>
            })}
        </ol>
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

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)

