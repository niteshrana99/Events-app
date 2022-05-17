import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
  
const UITable = ({rows = [], getRowContent, headers}: any) => {
   
    return (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
              {
                    headers.map((header: string) => {
                        return <TableCell key={header}>{header}</TableCell>
                    })
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: any) => (
               getRowContent(row)
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default UITable