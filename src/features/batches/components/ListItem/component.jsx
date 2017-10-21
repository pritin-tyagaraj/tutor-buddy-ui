import { ListItem as MaterialListItem } from 'material-ui/List'
import React from 'react'

let ListItem = ({ batchDescription, batchName, onSelect }) => (
  <MaterialListItem onClick={onSelect} />
)

export default ListItem
