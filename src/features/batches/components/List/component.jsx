import ListItem from '../ListItem'
import * as MaterialList from 'material-ui/List'
import React from 'react'

let List = ({ batches, onSelectBatch }) => (
  <MaterialList>
    {batches.map(batch => (
      <ListItem
        key={batch.id}
        batchDescription={batch.description}
        batchName={batch.name}
        onSelect={onSelectBatch}
      />
    ))}
  </MaterialList>
)

export default List
