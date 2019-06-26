
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'

interface IndexProps {}

interface IndexState {}

class Index extends React.Component<IndexProps, IndexState> {
    render() {
        return <h1>Index Page</h1>
    }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Index />, document.getElementById("root"))
})