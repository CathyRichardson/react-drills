import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      input: '',
      list: [],
    }
  }

  handleChange = (val) => { this.setState({ input: val }) }

  handleClick = () => {
    let input = this.state.input;
    let listCopy = [...this.state.list]
    listCopy.push(input)
    // list: [...this.state.list, this.state.input] //this in place of push
    this.setState({ list: listCopy })
  }

  render() {
    return (
      <div className="App">
        <h1>My To-do List:</h1>
        <input value={this.state.input} placeholder="Enter new task" onChange={e => this.handleChange(e.target.value)} />
        <button onClick={this.handleClick}>Add</button>
        <ToDo task={this.state.list} />
      </div>
    );
  }

}

export default App;
