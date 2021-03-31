import './App.css'
import Timer from './components/timer/timer'
import AlertIcon from './components/layout/AlertIcon'

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    alert: {
        position: 'absolute',
        maxWidth: '20vw',
    },
    someMargin: {
        // marginTop: '10vh',
    },
})

const App = () => {
    const classes = useStyles()
    return (
        <div className="App">
            <div className={classes.alert}>
                <AlertIcon />
            </div>
            <Timer />
        </div>
    )
}

export default App
