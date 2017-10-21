import Paper from 'material-ui/Paper'
import React from 'react'
import styles from './styles'
import { withStyles } from 'material-ui/styles'

class Batches extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <Paper className={classes.content}>
        <h2>Your Batches</h2>
      </Paper>
    )
  }
}

export default withStyles(styles)(Batches)
