import React, { Component } from 'react'

class App1 extends Component {
    constructor() {
        super()

        this.state = {
            input: '',
        }
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value})
    }

    render() {
        return (
            <div>
                <input onChange={this.handleInput} />
                <h1>{this.state.input}</h1>
            </div>
        )
    }
}

export default App1;