import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo';
import List from './List';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      list: [],
      input: '',
    }
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleClick = () => {
    let copyList = [...this.state.list, this.state.input]
    this.setState({ list: copyList, input: "" })
  }

  render() {

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.input} placeholder="Enter new task here" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        < List list={this.state.list} />
      </div>
    );
  }

}

export default App;
