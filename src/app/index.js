import AppBar from './partials/appBar'
import { applyMiddleware, createStore } from 'redux'
import appReducers from 'reducers'
import Batches from 'features/batches'
import Dashboard from 'features/dashboard'
import Drawer from './partials/drawer'
import { MuiThemeProvider, createMuiTheme, withTheme, withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import React from 'react'
import { Route, Router, browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import styles from './styles'
import thunk from 'redux-thunk'
import 'typeface-roboto'

const middleware = routerMiddleware(browserHistory)
let store = createStore(appReducers, applyMiddleware(middleware, thunk))
let theme = createMuiTheme()

const history = syncHistoryWithStore(browserHistory, store)

class ResponsiveDrawer extends React.Component {
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen })
  }

  render() {
    const { classes, theme } = this.props

    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div className={classes.root}>
            <div className={classes.appFrame}>
              <AppBar />
              <Drawer />
              <Router history={history}>
                <Route exact path="/" component={Dashboard} />
                <Route path="/batches" component={Batches} />
              </Router>
            </div>
          </div>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(withTheme(theme)(ResponsiveDrawer))
