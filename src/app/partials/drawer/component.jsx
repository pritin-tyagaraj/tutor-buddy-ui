import DashboardIcon from 'material-ui-icons/Dashboard'
import Divider from 'material-ui/Divider'
import Hidden from 'material-ui/Hidden'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import MaterialDrawer from 'material-ui/Drawer'
import React from 'react'
import StudentsIcon from 'material-ui-icons/People'
import styles from './styles'
import { withStyles } from 'material-ui/styles'

const Drawer = ({ classes, navToDashboard, navToBatches, open, toggleAppDrawer }) => {
  let renderHeader = () => <div className={classes.drawerHeader} />

  let renderMenu = () => (
    <List>
      <Divider />
      <ListItem button onClick={navToDashboard}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" secondary="An overview of what's up" />
      </ListItem>
      <ListItem button onClick={navToBatches}>
        <ListItemIcon>
          <StudentsIcon />
        </ListItemIcon>
        <ListItemText primary="Batches" secondary="Manage your students and batches" />
      </ListItem>
    </List>
  )

  return (
    <div>
      <Hidden mdUp>
        <MaterialDrawer
          type="temporary"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
          onRequestClose={toggleAppDrawer}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {renderHeader()}
          {renderMenu()}
        </MaterialDrawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <MaterialDrawer
          type="permanent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {renderHeader()}
          {renderMenu()}
        </MaterialDrawer>
      </Hidden>
    </div>
  )
}

// Drawer.propTypes = {
//   open: PropTypes.bool,
//   onDrawerClosing: PropTypes.func,
// }

export default withStyles(styles)(Drawer)
