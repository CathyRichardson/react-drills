import React, { Component } from 'react';

export default class NewTask extends Component {
    constructor() {
        super()

        this.state = {
            input: '',
        }
    }

    handleChange = (e) => {
        this.setState({ input: e.target.value })
    }


    render() {
        return (
            <div className="App">
                <input value={this.state.input} placeholder="Enter new task here" onChange={this.handleChange} />
                <button onClick={ e => this.props.handleClick(this.state.input)}>Add</button>
            </div>
        )
    }
}