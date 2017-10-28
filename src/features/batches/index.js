import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import { connect } from 'react-redux'
import CreateBatchDialog from './components/CreateBatchDialog'
import mapDispatchToProps from './map-dispatch-to-props'
import mapStateToProps from './map-state-to-props'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles'
import { withStyles } from 'material-ui/styles'

class Batches extends React.Component {
  constructor(props) {
    super(props)
    this.createBatch = this.createBatch.bind(this)
  }

  render() {
    const {
      classes,
      openCreateBatchDialog,
      closeCreateBatchDialog,
      isCreateBatchDialogOpen,
      createBatchDialogErrors,
    } = this.props

    return (
      <div className={classes.content}>
        <h2>Your Batches</h2>
        <Button
          fab
          color="primary"
          className={classes.createBatchFAB}
          onClick={openCreateBatchDialog}
        >
          <AddIcon />
        </Button>

        {/* Create Batch Dialog */}
        <CreateBatchDialog
          open={isCreateBatchDialogOpen}
          onRequestClose={closeCreateBatchDialog}
          createBatch={this.createBatch}
          errors={createBatchDialogErrors}
        />
      </div>
    )
  }

  createBatch(userInput) {
    const { createBatch } = this.props
    createBatch({
      name: userInput.batchName,
      subject: userInput.subject,
      recur_days: [], // TODO: Not yet implemented
      start_time: 10, // TODO: Not yet implemented
      end_time: 10, // TODO: Not yet implemented
    })
  }
}

Batches.propTypes = {
  classes: PropTypes.any.isRequired,
  // Create Batch Dialog
  openCreateBatchDialog: PropTypes.func.isRequired,
  closeCreateBatchDialog: PropTypes.func.isRequired,
  isCreateBatchDialogOpen: PropTypes.bool,
  createBatchDialogErrors: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Batches))
