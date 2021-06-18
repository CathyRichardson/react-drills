import React, { Component } from 'react'

class App1 extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
        }
    }

    handleInput = (event) => {
        this.setState({ input: event.target.value})
    }

    // Another way to write it, see arrow function on commented out input below:
    // handleChange(value) {
    //     this.setState({ message: value });
    //   }

    render() {
        return (
            <div>
                <input onChange={this.handleInput} />
                {/* <input onChange={e => this.handleChange(e.target.value)} type="text" /> */}
                {/* <p>{this.state.message}</p> */}
                <h1>{this.state.input}</h1>
            </div>
        )
    }
}

export default App1;