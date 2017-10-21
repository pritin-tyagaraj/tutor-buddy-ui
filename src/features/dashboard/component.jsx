import Paper from 'material-ui/Paper'
import React from 'react'
import styles from './styles'
import { withStyles } from 'material-ui/styles'

const Dashboard = ({ classes }) => (
  <Paper className={classes.content}>
    <h2>Your Dashboard</h2>
  </Paper>
)

export default withStyles(styles)(Dashboard)
