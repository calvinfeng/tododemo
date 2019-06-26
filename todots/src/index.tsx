
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as Redux from 'redux'
import { connect} from 'react-redux'
import './index.scss'

import { AppState } from './store/reducers'
import { Todo } from './store/types'

type StoreProps = {
    todos: Todo[]
}

type DispatchProps = {}

type ComponentProps = {}


type Props = StoreProps & DispatchProps & ComponentProps
type State = {}


const mapStateToProps = (state: AppState): StoreProps => {
    return {
        todos: state.todo.inventory
    }   
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>, componentProps: ComponentProps): DispatchProps => {
    return {}
}

class Index extends React.Component<Props, State> {
    render() {
        return <h1>Index Page</h1>
    }
}

const ConnectedIndex = connect<StoreProps, DispatchProps, ComponentProps>(mapStateToProps, mapDispatchToProps)(Index)

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<ConnectedIndex />, document.getElementById("react-application"))
})