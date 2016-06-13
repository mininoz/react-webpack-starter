import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
  render() {
    return (
      <h1>Let's Start</h1>
    )
  }
}

render( <App />, document.getElementById('app'))
