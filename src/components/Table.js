import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(pros, cons) {
  return { pros, cons };
}

const rows = [
  [createData('Many configurability tools and models', 'prova'), 
  createData('Many configurability tools and models', 'prova'), 
  createData('Many configurability tools and models', 'prova')],

  [createData('Available on https://www.bing.com/images/create', 'You have just 15 trials and the generation is not at its full potential'), 
  createData('Extreme prompt coherence', 'Sometimes hallucinates'),
  createData('Can reliably render intricate details', 'Sometimes fails at generalization')],

  [createData('Many configurability tools', "Doesn't allow further modification of results"),
  createData('Very artistic outputs', "Not very high quality"),
  createData('Strong at depicting very detailed environments', "Struggles when depicting humans")],

  [createData('Many configurability tools and models', 'prova'),
  createData('Many configurability tools and models', 'prova'),
  createData('Many configurability tools and models', 'prova')],


  [createData('prova', 'prova'), 
  createData('Many configurability tools and models', 'prova'), 
  createData('Many configurability tools and models', 'prova')]
];

const idx = {
  'stable': 0, 'dalle': 1, 'adobe': 2, 'leonardo': 3, 'krea': 4
}


export default function BasicTable({name}) 

  {
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
      <caption>Explore the pros and cons of using this platform for AI generation.</caption>
        <TableHead>
          <TableRow>
            <TableCell>Pros</TableCell>
            <TableCell>Cons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows[idx[name]].map((row) => (
            
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.pros}
              </TableCell>
              <TableCell >{row.cons}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}