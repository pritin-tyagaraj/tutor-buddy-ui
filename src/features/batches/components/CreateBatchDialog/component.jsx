import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import React from 'react'
import styles from './styles'
import { withStyles } from 'material-ui/styles'

class CreateBatchDialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      batchName: '',
      subject: '',
      createAllowed: false,
    }
    this.onUserInput = this.onUserInput.bind(this)
    this.submit = this.submit.bind(this)
  }

  render() {
    const { classes, errors, open, onRequestClose } = this.props
    const { createAllowed } = this.state
    return (
      <Dialog ignoreBackdropClick open={open} onRequestClose={onRequestClose}>
        <DialogTitle>Create New Batch</DialogTitle>
        <DialogContent>
          {errors && (
            <div className={classes.errorWrapper}>
              <Typography color="error">Oops! {errors[0]}</Typography>
            </div>
          )}
          <DialogContentText>
            Creating a batch of students lets you easily keep track of attendance, payments, notes
            and more.
          </DialogContentText>
          <TextField
            autoFocus
            fullWidth
            label="Batch Name"
            margin="dense"
            name="batchName"
            onChange={this.onUserInput}
            placeholder="A name you can easily identify this set of students with"
            type="text"
          />
          <TextField
            fullWidth
            label="Subject"
            margin="dense"
            name="subject"
            onChange={this.onUserInput}
            placeholder="What are you teaching this batch?"
            type="text"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onRequestClose}>Cancel</Button>
          <Button onClick={this.submit} color="primary" disabled={!createAllowed}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  onUserInput(event) {
    const field = event.target.name
    const value = event.target.value
    let newState = {
      ...this.state,
      [field]: value,
    }

    // basic validation
    let createAllowed = false
    if (newState.batchName && newState.subject) {
      createAllowed = true
    }
    newState.createAllowed = createAllowed

    this.setState(newState)
  }

  submit() {
    const { createBatch } = this.props
    const { batchName, subject } = this.state

    createBatch({
      batchName,
      subject,
    })
  }
}

export default withStyles(styles)(CreateBatchDialog)
