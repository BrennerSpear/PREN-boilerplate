import React from 'react'
// import {Grid, Row, Col} from 'react-bootstrap'

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hello World'
    }
  }

  componentDidMount() {
    
  }

  render () {
    return (
      <div>
        {this.state.text}
      </div>
      )
  }
}
