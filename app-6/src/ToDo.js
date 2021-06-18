import React, { Component } from 'react';

class ToDo extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.task.map((element, i) => <li key={i}>{element}</li>)}
                </ul>
            </div>
        )
    }
}

export default ToDo;