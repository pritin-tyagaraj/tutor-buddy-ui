import AppBar from './component'
import { connect } from 'react-redux'
import mapDispatchToProps from './map-dispatch-to-props'

export default connect(null, mapDispatchToProps)(AppBar)
