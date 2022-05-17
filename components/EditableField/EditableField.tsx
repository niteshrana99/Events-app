import { TableCell, TextField } from '@mui/material'
import React from 'react'

const EditableField = ({isEditable, value, onInputChange}: any) => {

    return (
        <TableCell component="th" scope="row">
            {
               isEditable ?  <TextField value={value} onChange={onInputChange} id="outlined-basic" variant="outlined"   /> : value
            }
        </TableCell>
    )
}

export default EditableField