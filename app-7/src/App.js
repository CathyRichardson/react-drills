import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo';
import List from './List';
import NewTask from './NewTask';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      list: [],

    }
  }

  handleClick = (input) => {
    let copyList = [...this.state.list, input]
    this.setState({ list: copyList, input: "" })
  }

  render() {

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask handleClick={this.handleClick}/>
        < List list={this.state.list} />
      </div>
    );
  }

}

export default App;
