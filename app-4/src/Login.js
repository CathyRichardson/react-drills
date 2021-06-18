import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super()

        this.state = {
            username: '',
            password: '',

        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChangeUser = this.handleChangeUser.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this)
    }

    handleClick() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    handleChangePass(e) {
        this.setState({ password: e.target.value })
    }

    handleChangeUser(e) {
        this.setState({ username: e.target.value })
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChangeUser} />
                <input onChange={this.handleChangePass} />
                <button onClick={this.handleClick}>Login</button>
            </div>
        )
    }
}

export default Login