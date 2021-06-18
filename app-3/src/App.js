import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
      input: '',
    }
  }

  handleInput = (event) => {
    this.setState({ input: event.target.value })
  }

  render() {
    let list = this.state.list;
    let input = this.state.input
    let filteredList = list.filter(e => e.includes(input)) //note: includes returns true for an empty input string.

    return (
      <div className="App">
        <input onChange={this.handleInput} />
        <ul>
          {filteredList.map((element, i) => <li key={i}>{element}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
