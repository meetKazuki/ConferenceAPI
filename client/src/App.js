import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Talk from './components/talk';

class App extends Component {
  constructor() {
    super();

    this.state = {
      talks: [],
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3000/talks`)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          talks: response.data,
        });
      });
  }
  render() {
    console.log(this.state.talks);
    return (
      <div className="App">
        <Header
          firstName={this.state.firstName}
          lastName={this.state.lastName}
        />
        <Talk talks={this.state.talks} />
      </div>
    );
  }
}

export default App;
