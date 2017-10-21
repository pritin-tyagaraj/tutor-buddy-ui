import IconButton from 'material-ui/IconButton'
import MaterialAppBar from 'material-ui/AppBar'
import MenuIcon from 'material-ui-icons/Menu'
import React from 'react'
import styles from './styles'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

const AppBar = ({ classes, toggleAppDrawer }) => (
  <MaterialAppBar className={classes.appBar}>
    <Toolbar>
      <IconButton color="contrast" onClick={toggleAppDrawer} className={classes.navIconHide}>
        <MenuIcon />
      </IconButton>
      <Typography type="title" color="inherit" noWrap>
        Tutor Buddy
      </Typography>
    </Toolbar>
  </MaterialAppBar>
)

export default withStyles(styles)(AppBar)
