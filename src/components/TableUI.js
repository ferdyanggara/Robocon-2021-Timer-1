import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const MsToTime = (s) => {
    var ms = s % 1000
    s = (s - ms) / 1000
    var secs = s % 60
    s = (s - secs) / 60
    var mins = s % 60
    var hrs = (s - mins) / 60

    return hrs + ':' + mins + ':' + secs + '.' + ms
}

const TableUI = ({ RlapPot }) => {
    const useStyles = makeStyles({
        table: {
            maxWidth: 200,
        },
    })
    const classes = useStyles()

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Arrow No.</TableCell>
                            <TableCell align="right">Timestamp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {RlapPot.map((row) => (
                            <TableRow key={row.arrow}>
                                <TableCell component="th" scope="row">
                                    {row.arrowCounter.arrow}
                                </TableCell>
                                <TableCell align="right">
                                    {MsToTime(row.timeElapsed.time * 1000)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TableUI
