import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo';

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
    let toDoComponentList = this.state.list.map((element, index) => <ToDo key={index} task={element} />);

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value={this.state.input} placeholder="Enter new task here" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
        {toDoComponentList}
        {/* <NewTask />
        <List /> */}
      </div>
    );
  }

}

export default App;
