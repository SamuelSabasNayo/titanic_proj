import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { allPassengers } from '../../data';

const StyledTableCell = withStyles((theme) => ({
    head: {
        // backgroundColor: theme.palette.primary,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('38.38383838383838%', '12.2334455667789%', '26.150392817059483%', 79.58)
];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables1() {
    const classes = useStyles();

    console.log(allPassengers);

    return (
        <TableContainer component={Paper} style={{ width: '80%', margin: 'auto', marginTop: 30 }}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead  style={{ background: '#4051B6' }}>
                    <TableRow>
                        <StyledTableCell>PClass</StyledTableCell>
                        <StyledTableCell align="right">Age</StyledTableCell>
                        <StyledTableCell align="right">Sex</StyledTableCell>
                        <StyledTableCell align="right">Survived</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {allPassengers.Pclass}
                            </StyledTableCell>
                            <StyledTableCell align="right">{allPassengers.Age}</StyledTableCell>
                            <StyledTableCell align="right">{allPassengers.Sex}</StyledTableCell>
                            <StyledTableCell align="right">{allPassengers.Survived}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};