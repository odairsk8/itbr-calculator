import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CategoriesScore(props) {
  const classes = useStyles();

  return (


    <List className={classes.root}>
        {
                props.categories === undefined ? <span>none</span> :
                <TableContainer>
                  <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Your Points</TableCell>
                        {/* <TableCell align="center">Max Possible</TableCell> */}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Object.keys(props.categories).map((key, index) => (
                        <TableRow key={key}>
                          {console.log(props.categories[key])}
                          <TableCell align="center">{key}</TableCell>
                          <TableCell align="center">{props.categories[key]}</TableCell>
                          {/* <TableCell align="right"></TableCell> */}
                          {/*<TableCell align="right"></TableCell> */}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            }
    </List>
  );
}
