// === import node modules
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// === import local files
import DynamicInput from './DynamicInput.jsx';

export default class Form extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      response: {}
    }
  }
  
  changeResponse(val) {
    return (e) => {
      this.setState(prevState => {
        prevState[val] = e.target.value;
        return prevState;
      });
    }
  }
  
  
  render() {
    return (
      <form>
        {this.props.inputs.map(e => <DynamicInput input={e} key={e.key} handleChange={this.changeResponse(e.title)}  />)}
      </form>
    );
  }
}

Form.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.object)
}