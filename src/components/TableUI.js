import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'

const MsToTime = (s) => {
    var ms = s % 1000
    s = (s - ms) / 1000
    var secs = s % 60
    s = (s - secs) / 60
    var mins = s % 60
    var hrs = (s - mins) / 60

    return hrs + ':' + mins + ':' + secs + '.' + ms
}

const columns = [
    { id: 'name', label: 'Arrow No', maxWidth: 50, align: 'left' },
    { id: 'code', label: 'Time', maxWidth: 100, align: 'left' },
]

const useStyles = makeStyles({
    root: {
        width: '20%',
    },
    container: {
        maxHeight: 200,
    },
})

const TableUI = ({ RlapPot, pot }) => {
    const classes = useStyles()

    // console.log('rlappot: ', RlapPot)

    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(10)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    console.log('rlap pot: ', RlapPot)

    return (
        // <Paper className={classes.root}>
        <Paper>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {RlapPot.slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage,
                        ).map((row) => {
                            return (
                                <TableRow
                                    hover
                                    role="checkbox"
                                    tabIndex={-1}
                                    // key={row.code}
                                >
                                    <TableCell>{row.arrow}</TableCell>
                                    <TableCell>
                                        {MsToTime(row.time * 1000)}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={RlapPot.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            /> */}
        </Paper>
    )
}

export default TableUI
