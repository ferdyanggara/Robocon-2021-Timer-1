import React, {useState, useEffect} from 'react'
import {StartAction, PauseAction, RestartAction, UpdatingAction} from "../../redux/actions/timeActions"
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import TableUI from '../TableUI';
import CheckIcon from '@material-ui/icons/Check';
// import { Pause } from '@material-ui/icons';
import ToggleButton from '@material-ui/lab/ToggleButton';
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
   
  const [counter, setCounter] = useState(1)
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
  const [arrowCounter, setarrowCounter] = useState(0)

  const [toggleKeyBinding, settoggleKeyBinding] = useState(false)

  const handleToggleKeyBinding = () => {
    settoggleKeyBinding(true)
  }

  const lapAction = () => {
    console.log("Time elapsed: ", timeElapsed)
    setarrowCounter(arrowCounter => arrowCounter + 1);
    setRlapPot1([...RlapPot1,{arrow: arrowCounter , time: timeElapsed}])
  }
  
  useEffect(() => {
    console.log('lappot1: ', RlapPot1);
  }, [RlapPot1])

  const makeTime = () => {
    setstartOnce(true);
      setintervalFunc( setInterval(() => {
        settimeElapsed(timeElapsed => timeElapsed - 1);
        },1000))
  }

 
  const StopAction = () => {
    clearInterval(intervalFunc);
    console.log("stop")
  }


    

  const [timeElapsed, settimeElapsed] = useState(180)


  //redux this 
  const Restart = () => {
    clearInterval(intervalFunc);
    setstartOnce(false)
    settimeElapsed(180);
  }


  const checkLog = (e) => {
    // console.log("keycode: ", e.keyCode)
    if (toggleKeyBinding){
      if (e.keyCode == 82){
        console.log('trigger')
        setTimeout( () => {}, 1000)
        if (e.keyCode == 49){
          console.log('bruh')
          lapAction();
        } else if (e.keyCode == 50){
  
        } else if (e.keyCode == 51){
          
        } else if (e.keyCode == 52){
          
        } else if (e.keyCode == 53){
          
        }
      } 
    }
  }

  document.addEventListener('keypress', checkLog)

  const [selected, setSelected] = React.useState(false);

  const toggleTimeElapsed = () => {
    timeElapsed == 180 ? settimeElapsed(60) : settimeElapsed(180)
  }
    return (
        <div>
            <h1>{MsToTime(timeElapsed*1000)}</h1>

            <Button variant="contained" onClick={toggleTimeElapsed}>Toggle Limit</Button>
            <Button  variant="contained"disabled={startOnce} onClick={makeTime}>Start</Button>
            <Button  variant="contained"onClick={Restart}>Restart</Button>
            <Button  variant="contained"onClick={StopAction}>Stop</Button>
            <Button  variant="contained"onClick={lapAction}>Lap</Button>
     
            <Button  variant="contained"onClick={handleToggleKeyBinding}>KeyBinding</Button>

            <TableUI  RlapPot1={RlapPot1}/>
{/* 
  <ToggleButton
    value="check"
    selected={selected}
    onChange={() => {
      setSelected(!selected);
    }}
  >
    <CheckIcon />
  </ToggleButton> */}
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
