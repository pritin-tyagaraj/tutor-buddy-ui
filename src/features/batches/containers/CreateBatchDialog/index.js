import { connect } from 'react-redux'
import CreateBatchDialog from '../../components/CreateBatchDialog'
import mapStateToProps from './map-state-to-props'
import mapDispatchToProps from './map-dispatch-to-props'
import React from 'react'

class WrappedCreateBatchDialog extends React.Component {
  validateForm() {
    // use selectors to get values entered in form
  }

  render() {
    return <CreateBatchDialog validateForm={this.validateForm} {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedCreateBatchDialog)
// connect using map-dispatch and map-state
// provide additional handlers for onCancelClick, onSaveClick etc. (or perhaps that goes in map-dispatch)
