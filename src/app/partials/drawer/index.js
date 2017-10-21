import { connect } from 'react-redux'
import Drawer from './component'
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
