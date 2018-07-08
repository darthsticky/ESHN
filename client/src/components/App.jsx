// === import node modules ===
import React, { Component, Fragment } from 'react'

// === import local files ===
import Envelope from './envelope/Envelope.jsx';
import Form from './form/Form.jsx';

// === create component ===
export default class extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  render() {
    return (
      <Fragment>
        You're in the App!
      </Fragment>
    )
  }
  
}