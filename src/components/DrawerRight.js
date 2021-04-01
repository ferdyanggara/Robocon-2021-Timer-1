import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import { setAlert } from '../redux/actions/alertAction'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import {
    AddingArrowAction,
    DeletingArrowAction,
} from '../redux/actions/arrowActions'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import { connect } from 'react-redux'
import DrawerTable from './DrawerTable'

const columns = [
    { id: 'name', label: 'Arrow No', maxWidth: 50, align: 'left' },
    { id: 'code', label: 'Time', maxWidth: 100, align: 'left' },
    { id: 'bestTime', label: 'Best Time', maxWidth: 100, align: 'left' },
]

const useStyles = makeStyles({
    list: {
        width: 400,
    },
    fullList: {
        width: 'auto',
    },
    saudara: {
        marginRight: '2px',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
})

const DrawerRight = ({ arrowsData }) => {
    const classes = useStyles()
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return
        }

        setState({ ...state, [anchor]: open })
    }

    // useEffect(() => {
    //     let things = Object.values(arrowsData)
    //     let newArray = []
    //     things.map((each) => {
    //         if (each.length > 0) {
    //             newArray.push()
    //         }
    //     })
    //     // console.log(
    //     //     'arrow Data',
    //     //     Object.values(arrowsData).map((each) => {
    //     //         each.map((moreEach) => {
    //     //             console.log(moreEach.time)
    //     //         })
    //     //     }),
    //     // )
    //     // console.log('things: ', things)
    // }, [arrowsData])

    const [renderPots, setRenderPots] = useState([])

    useEffect(() => {
        // let tempArray = []
        // console.log('arrowsData: ', arrowsData)
        // Object.values(arrowsData).forEach((each) => {
        //     if (each.length > 0) {
        //         tempArray.push(each[0])
        //     }
        // })
        // console.log('temp array: ', tempArray)
        // setRenderPots(Object.values(arrowsData))
        // console.log('render pots: ', renderPots)
        let tempArray = []
        Object.values(arrowsData).forEach((potData) => {
            potData.forEach((eachData) => {
                // console.log('each data: ', eachData)
                tempArray.push(eachData)
            })
        })
        tempArray.sort((a, b) => {
            return a.arrow - b.arrow
        })
        // console.log('temp array: ', tempArray)
        setRenderPots(tempArray)
    }, [arrowsData])

    // things.map((each) => {
    //     if (each.length > 0) {
    //         console.log('time: ', each)
    //         each.map((moreEach) => {
    //             console.log(moreEach.time)
    //         })
    //     }
    // })

    // let newArray = []

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Paper>
                    <TableContainer className={classes.container}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{
                                                minWidth: column.minWidth,
                                            }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            {renderPots.map((each) => {
                                return <DrawerTable RlapPot={[each]} />
                            })}
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
                {/* {Object.values(arrowsData).map((each) => {
                    each.map((moreEach, index) => {
                        if (moreEach.time != undefined) {
                            let text = moreEach.time.toString()
                            return (
                                // <ListItem button key={moreEach.time}>
                                <ListItem button>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        }
                    })
                })} */}
                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                    (text, index) => (
                        
                    ),
                )} */}
            </List>
            {/* <Divider /> */}
        </div>
    )

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button
                        style={{
                            marginTop: '2.5vh',
                            marginLeft: '42vw',
                            position: 'absolute',
                        }}
                        onClick={toggleDrawer(anchor, true)}
                    >
                        <MenuIcon />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        arrowsData: state.arrowList.arrows,
        arrowNumber: state.arrowList.numberOfArrows,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addArrow: (barrel, arrow, time) => {
            dispatch(AddingArrowAction(barrel, arrow, time))
        },
        deleteArrow: (id) => {
            dispatch(DeletingArrowAction(id))
        },
        triggerAlert: (msg = 'Arrow Added', alertType = 'success') => {
            dispatch(setAlert(msg, alertType))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerRight)
