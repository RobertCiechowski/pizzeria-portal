import React from 'react';
import styles from './Waiter.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#659DBD',
    },
    secondary: {
      main: '#DAAD86',
    },
  },
});

const rows = [
  { id: 1, tableId: '2', number: '1', name: 'ORDER', status: 'DONE', orderTime: '13:30', summary: '40' },
  { id: 2, tableId: '1', number: '2', name: 'ORDER', status: 'CANCELLED', orderTime: '10:00', summary: '35' },
  { id: 3, tableId: '3', number: '3', name: 'ORDER', status: 'READY', orderTime: '09:30', summary: '1200' },
  { id: 4, tableId: '2', number: '4', name: 'ORDER', status: 'DONE', orderTime: '14:00', summary: '220' },
  { id: 5, tableId: '2', number: '6', name: 'ORDER', status: 'DELIVERED', orderTime: '16:00', summary: '350' },
  { id: 6, tableId: '3', number: '7', name: 'ORDER', status: 'READY', orderTime: '16:30', summary: '230' },
  { id: 7, tableId: '2', number: '4', name: 'ORDER', status: 'CANCELLED', orderTime: '13:30', summary: '410' },
  { id: 8, tableId: '2', number: '6', name: 'ORDER', status: 'READY', orderTime: '17:00', summary: '30' },
  { id: 9, tableId: '3', number: '7', name: 'ORDER', status: 'DELIVERED', orderTime: '15:30', summary: '600' },
];

const Order = () => {
  return (
    <Paper className={styles.component}>
      <ThemeProvider theme={theme}>
        <Table>
          <TableHead style={{ background: '#BC896A' }}>
            <TableRow>
              <TableCell>
                <Button variant="contained" color="secondary" size="large"  >
                  <Link to={process.env.PUBLIC_URL + '/waiter/new'} style={{ textDecoration: 'none', color: '#FFFFFF' }} >New Order</Link>
                </Button>
                <Button variant="contained" color="secondary" size="large"  >
                  <Link to={process.env.PUBLIC_URL + '/waiter/new'} style={{ textDecoration: 'none', color: '#FFFFFF' }} >Change Order</Link>
                </Button>
              </TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">TABLE NUMBER</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">ORDER NUMBER</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">STATUS</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">ORDER TIME</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">SUMMARY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} style={`${row.status}` === 'READY' ? { background: '#5CDB95' } : { background: '#379683' }}>
                <TableCell align="left">
                  <Button variant="contained" color="primary" size="small">
                    <Link to={process.env.PUBLIC_URL + '/waiter/order/123abc'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                      {row.name}
                    </Link>
                  </Button> {`${row.status}` !== 'DONE' && `${row.status}` !== 'CANCELLED' && `${row.status}` ?
                    <Button variant="contained" color="secondary" size="small" >
                      <Link to={process.env.PUBLIC_URL + '/waiter/new'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>DETAILS</Link>
                    </Button>
                    : (null)} {`${row.status}` === 'READY' ?
                      <Button variant="contained" color="secondary" size="small">
                        <Link to={process.env.PUBLIC_URL + '/waiter/new'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>CHANGE TO 'DELIVERED'</Link>
                      </Button>
                      : (null)}
                </TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${row.tableId}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${row.number}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${row.status}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${row.orderTime}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${row.summary}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter style={{ background: '#4056A1' }} >
            <TableRow>
              <TableCell>
                <Button color="secondary" variant="contained" size="large" style={{ color: '#FFFFFF' }}>LOGOUT</Button>
              </TableCell>
              <TableCell align="center">
                <Button color="secondary" variant="contained" size="large" style={{ color: '#FFFFFF' }}>TRANSFER TABLE</Button>
              </TableCell>
              <TableCell align="center">
                <Button color="secondary" variant="contained" size="large" style={{ color: '#FFFFFF' }}>RECEIPTS</Button>
              </TableCell >
              <TableCell>
              </TableCell>
              <TableCell align="center" style={{ color: '#FFFFFF', fontSize: '14px' }}>AVERAGE WAITING TIME: 26 MIN</TableCell >
              <TableCell align="center">
                <Button color="secondary" variant="contained" size="large" style={{ color: '#FFFFFF' }}>TIPS</Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ThemeProvider>
    </Paper>
  );
};

export default Order; 