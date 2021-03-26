import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import GameMap from '../GameMap/GameMap'

import Button from '@material-ui/core/Button'
import TableUI from '../TableUI'
import Switch from '@material-ui/core/Switch'

import Grid from '@material-ui/core/Grid'


import {connect} from "react-redux"
import {AddingArrowAction, DeletingArrowAction} from "../../redux/actions/arrowActions"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    childTable: {
        flexGrow: 1,
        paddingLeft: '2vw',
        marginTop: '5vh',
        flexDirection: "row"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    saudara: {
        flexDirection: 'row',
        flexWrap: 'nowrap'
    }
}))


const Timer = ({arrowNumber, arrowsData, addArrow, deleteArrow}) => {
    
    console.log(arrowsData);
    let startTime = Date.now()
    const MsToTime = (s) => {
        var ms = s % 1000
        s = (s - ms) / 1000
        var secs = s % 60
        s = (s - secs) / 60
        var mins = s % 60
        var hrs = (s - mins) / 60

        return hrs + ':' + mins + ':' + secs + '.' + ms
    }

    //setLoop should be seperated from redux

    const [startOnce, setstartOnce] = useState(false)
    const [intervalFunc, setintervalFunc] = useState({})
    const [RlapPot1, setRlapPot1] = useState([])
    const [RlapPot2, setRlapPot2] = useState([])
    const [RlapPot3, setRlapPot3] = useState([])
    const [RlapPot4, setRlapPot4] = useState([])
    const [RlapPot5, setRlapPot5] = useState([])
    const [BlapPot1, setBlapPot1] = useState([])
    const [BlapPot2, setBlapPot2] = useState([])
    const [BlapPot3, setBlapPot3] = useState([])
    const [BlapPot4, setBlapPot4] = useState([])
    const [BlapPot5, setBlapPot5] = useState([])
    const [arrowCounter, setarrowCounter] = useState({ arrow: 1 })

    const [timeElapsed, settimeElapsed] = useState({ time: 180 })



    const lapAction = () => {
        setarrowCounter((arrowCounter) => {
            return {
                arrow: arrowCounter.arrow + 1
            }
        })
        setRlapPot1([...RlapPot1, { arrowCounter, timeElapsed }])
    }

    useEffect(() => {
        // console.log('lappot1: ', RlapPot1)
    }, [RlapPot1])

    const makeTime = () => {
        setstartOnce(true)
        setintervalFunc(
            setInterval(() => {
                settimeElapsed((timeElapsed) => {
                    return {
                        time: timeElapsed.time - 1
                    }
                })
            }, 1000),
        )
    }

    const StopAction = () => {
        clearInterval(intervalFunc)
        console.log('stop')
    }

    //redux this
    const Restart = () => {
        clearInterval(intervalFunc)
        setstartOnce(false)
        console.log("what is the time: ", timeElapsed)
        toggleTimer == false ? settimeElapsed((timeElapsed) => {
            return {
                time: 180
            }
        }) : settimeElapsed((timeElapsed) => {
            return {
                time: 60
            }
        })
    }


    const [toggleTimer, settoggleTimer] = useState(false)

    const handleToggletimer = (event) => {
        settoggleTimer(!toggleTimer)
        timeElapsed.time == 180 ? settimeElapsed((timeElapsed) => {
            return {
                time: 60
            }
        }) : settimeElapsed((timeElapsed) => {
            return {
                time: 180
            }
        })
    }

    const classes = useStyles();

    return (
        <>
            <div>
                <h1>{MsToTime(timeElapsed.time * 1000)}</h1>

                <Switch
                    checked={toggleTimer}
                    onChange={handleToggletimer}
                    color="secondary"
                    name="toggleTimer"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Button variant="contained" disabled={startOnce} onClick={makeTime}>
                    Start
                </Button>
                <Button variant="contained" onClick={Restart}>
                    Restart
                </Button>
                <Button variant="contained" onClick={StopAction}>
                    Stop
                </Button>
                <Button variant="contained" onClick={lapAction}>
                    Lap
                </Button>
                <Button variant="contained" onClick={() => {
                    addArrow(1, arrowNumber,timeElapsed);
                }}>
                    add bar 1
                </Button>
                <Button variant="contained" onClick={() => {
                    addArrow(2, arrowNumber, timeElapsed);
                }}>
                    add bar 2
                </Button>
                <Button variant="contained" onClick={() => {
                    deleteArrow(1);
                }}>
                    del bar 1
                </Button>
                <Button variant="contained" onClick={() => {
                    deleteArrow(2);
                }}>
                    del bar 2
                </Button>
            </div>



            <div className={classes.root}>
                <Grid container className={classes.saudara}>
                    <Grid container style={{ maxWidth: "50vw", marginTop: "5vh" }}>
                        <GameMap />
                    </Grid>
                    <Grid container className={classes.childTable}>
                        {/* 1st row */}
                        <Grid item xs={6}>
                            <TableUI RlapPot={RlapPot1} />
                        </Grid>
                        <Grid item xs={6}>
                            <TableUI RlapPot={RlapPot1} />
                        </Grid>
                        {/* <Grid item xs={2}>
                            <TableUI RlapPot={RlapPot1} />
                        </Grid>
                        <Grid item xs={2}>
                            <TableUI RlapPot={RlapPot1} />
                        </Grid>
                        <Grid item xs={2}>
                            <TableUI RlapPot={RlapPot1} />
                        </Grid> */}
                    </Grid>
                    <Grid container className={classes.childTable}>
                        {/* 2nd row */}
                        <Grid item xs={6}>
                            <TableUI RlapPot={RlapPot1} />
                        </Grid>
                        <Grid item xs={6}>
                            <TableUI RlapPot={RlapPot1} />
                        </Grid>
                        {/* <Grid item xs={2}>
                            <TableUI RlapPot={RlapPot1} />
                        </Grid>
                        <Grid item xs={2}>
                            <TableUI RlapPot={RlapPot1} />
                        </Grid>
                        <Grid item xs={2}>
                            <TableUI RlapPot={RlapPot1} />
                        </Grid> */}
                    </Grid>
                </Grid>
            </div>
        </>
    )
}


const mapStateToProps = (state)=> {
    return({
        arrowsData : state.arrowList.arrows,
        arrowNumber : state.arrowList.numberOfArrows,
    })
  }
  
  const mapDispatchToProps = (dispatch) => {
    return({
        addArrow : (barrel,arrow, time) => {dispatch(AddingArrowAction(barrel, arrow, time))},
        deleteArrow : (id) => {dispatch(DeletingArrowAction(id))}
    })
  } 



export default connect(mapStateToProps, mapDispatchToProps)(Timer)
