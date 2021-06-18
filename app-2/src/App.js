import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      list: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
    }
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.list.map((element, i) => <li key={i}>{element}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
