import React, {useState, useEffect} from 'react'

import {StartAction, PauseAction, RestartAction, UpdatingAction} from "../../redux/actions/timeActions"
import {connect} from 'react-redux'
// import { Pause } from '@material-ui/icons';

const Timer = (props) => {
  let startTime = Date.now();

  const MsToTime = (s) => {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    var hrs = (s - mins) / 60;

  return hrs + ':' + mins + ':' + secs + '.' + ms;
  }

  //setLoop should be seperated from redux
  const [loop, setLoop] = useState(()=>{});

  
  //redux this
  const Start = () => {
    if(!props.start)
    {
      props.startTimer();
      startTime = Date.now();
      setLoop(setInterval(()=>{
            let difference = Date.now() - startTime;
            props.updateTimer(difference);
      }, 10))
      
    }
  }
  //redux this
  const Pause = () => {
      if(!props.start) return;
      if(props.run){
        clearInterval(loop);
        props.pauseTimer(props.run);
      }
      else{
        startTime = Date.now() - props.time;
        setLoop(setInterval(()=>{
            let difference = Date.now() - startTime;
            props.updateTimer(difference);
         }, 10));
        props.pauseTimer(props.run);
      }
  }

  //redux this 
  const Restart = () => {
    if(!props.start) return;
    clearInterval(loop);
    props.restartTimer();
  }

    return (
        <div>
            <h1>{MsToTime(props.time)}</h1>
            <button onClick={Start}>Start</button>
            <button onClick={Restart}>Restart</button>
            <button onClick={Pause}>Pause</button>
        </div>
    )
}

const mapStateToProps = (state) => {
  return({
    time : state.timer.time,
    start : state.timer.start,
    run : state.timer.run,
  })
}

const mapDispatchToProps = (dispatch) => {
  return{
    startTimer : () => {
      dispatch(StartAction());},
    pauseTimer : (currentRun) => {dispatch(PauseAction(currentRun));},
    updateTimer : (millis) =>{dispatch(UpdatingAction(millis));},
    restartTimer : () => {dispatch(RestartAction());}

  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
