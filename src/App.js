import React from 'react'
import AlertIcon from './components/layout/AlertIcon'
import './App.css'
import { makeStyles } from '@material-ui/core/styles'
import Timer from './components/timer/timer'
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
