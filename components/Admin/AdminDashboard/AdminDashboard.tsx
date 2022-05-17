import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import UITable from '../../Table/Table';
import EditableField from '../../EditableField/EditableField';

function getRow(row: any) {

  const [editState, setEditState] = React.useState(false);
  const [rowValue, setRowValue] = React.useState(row.name);

  const onEditClick = () => {
    setEditState(!editState);
  }

  const handleRowDelete = () => {
    setRowValue(null)
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowValue(event.target.value);
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

        <EditableField isEditable={editState} value={rowValue} onInputChange={onInputChange} />
        <TableCell component="th" scope="row">
          <Button>View Events</Button>
        </TableCell>
        <TableCell component="th" scope="row">
          <Button onClick={onEditClick}>{!editState ? 'Edit' : 'Save'}</Button>
          <Button onClick={handleRowDelete}>Delete</Button>
        </TableCell>

      </TableRow>

    </React.Fragment>
  );
}


export default function CollapsibleTable() {
  
  return (
    <UITable headers={['Event Type', 'View Events', 'Actions']} getRowContent={getRow} rows={
      [
        {
          name: 'Football',
        },
        {
          name: 'Music'
        },
        {
          name: 'Story Telling'
        },
        {
          name: 'Football'
        },
        {
          name: 'Football'
        }
      ]
    } />
  );
}
