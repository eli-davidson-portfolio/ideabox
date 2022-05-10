import React, { Component } from 'react';

class App extends Component {
  constructor () {
    super();
    this.state = {
      ideas: []
    }
  }
  render () {
    return (
      <main classname="App">
        <h1>IdeaBox</h1>
        <p>Hi!</p>
      </main>
    )
  }
}

export default App;