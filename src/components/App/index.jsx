import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'

function App(props) {
  return (
    <div>
      <h1>Hello world! {1 + 1}</h1>
      <ButtonToolbar>
        <Button bsStyle="primary">Hello!</Button>
      </ButtonToolbar>
    </div>
  )
}

export default App
