import React, { Component } from 'react'
import GameFieldImage from './GameField.png'
import './map.css'
import { setAlert } from '../../redux/actions/alertAction'
import { connect } from 'react-redux'

const GameMap = ({
    addingArrow,
    arrowNumber,
    timeElapsed,
    triggerAlert,
    redArrow,
    blueArrow,
}) => {
    return (
        <div>
            <img
                className="GameFieldImage"
                src={GameFieldImage}
                alt="error"
                useMap="#GameField"
            />
            <map name="GameField">
                <area
                    // red1
                    shape="circle"
                    coords="201,316,10"
                    alt="buttonerror"
                    href="#"
                    onClick={() => {
                        addingArrow('RLeft', arrowNumber, timeElapsed, 'RED')
                        triggerAlert('Arrow Added at Pot Red Left', 'success')
                    }}
                    hover="true"
                />
                <area
                    // red 2
                    shape="circle"
                    coords="403,316,10"
                    alt="buttonerror"
                    href="#"
                    onClick={() => {
                        addingArrow('RRight', arrowNumber, timeElapsed, 'RED')

                        triggerAlert('Arrow Added at Pot Red Right', 'success')
                    }}
                    hover="true"
                />
                <area
                    // blue top
                    shape="circle"
                    coords="285,176,10"
                    alt="buttonerror"
                    href="#"
                    onClick={() => {
                        console.log('blue top')
                        addingArrow('BTop', arrowNumber, timeElapsed, 'BLUE')

                        triggerAlert('Arrow Added at Pot Blue Top', 'success')
                    }}
                    hover="true"
                />
                <area
                    shape="circle"
                    coords="285,428,10"
                    alt="buttonerror"
                    href="#"
                    onClick={() => {
                        addingArrow('BBottom', arrowNumber, timeElapsed, 'BLUE')
                        triggerAlert(
                            'Arrow Added at Pot Blue Bottom',
                            'success',
                        )
                    }}
                    hover="true"
                />
                <area
                    shape="circle"
                    coords="285,302,10"
                    alt="buttonerror"
                    href="#"
                    onClick={() => {
                        addingArrow('BCenter', arrowNumber, timeElapsed, 'BLUE')
                        triggerAlert(
                            'Arrow Added at Pot Blue Center',
                            'success',
                        )
                    }}
                    hover="true"
                />
                <area
                    shape="circle"
                    coords="201, 287, 10"
                    alt="buttonerror"
                    href="#"
                    onClick={() => {
                        addingArrow('BLeft', arrowNumber, timeElapsed, 'BLUE')

                        triggerAlert('Arrow Added at Pot Blue Left', 'success')
                    }}
                    hover="true"
                    className="test"
                />
                <area
                    shape="circle"
                    coords="403,287,10"
                    alt="buttonerror"
                    href="#"
                    onClick={() => {
                        addingArrow('BRight', arrowNumber, timeElapsed, 'BLUE')

                        triggerAlert('Arrow Added at Pot Blue Right', 'success')
                    }}
                    hover="true"
                />
                <area
                    shape="circle"
                    coords="320,176,10"
                    alt="buttonerror"
                    href="#"
                    onClick={() => {
                        addingArrow('RTop', arrowNumber, timeElapsed, 'RED')

                        triggerAlert('Arrow Added at Pot Red Top', 'success')
                    }}
                    hover="true"
                />
                <area
                    shape="circle"
                    coords="320,428,10"
                    alt="buttonerror"
                    href="#"
                    onClick={() => {
                        addingArrow('RBottom', arrowNumber, timeElapsed, 'RED')
                        triggerAlert('Arrow Added at Pot Red Bottom', 'success')
                    }}
                    hover="true"
                />
                <area
                    shape="circle"
                    coords="320,302,10"
                    alt="buttonerror"
                    href="#"
                    onClick={() => {
                        addingArrow('RCenter', arrowNumber, timeElapsed, 'RED')
                        triggerAlert('Arrow Added at Pot Red Center', 'success')
                    }}
                    hover="true"
                />
            </map>

            <div>
                <p className="PotsStatus rleft">R1:{redArrow.RLeft.length}</p>
                <p className="PotsStatus rright">R2:{redArrow.RRight.length}</p>
                <p className="PotsStatus rtop">R3:{redArrow.RTop.length}</p>
                <p className="PotsStatus rcenter">
                    R4:{redArrow.RCenter.length}
                </p>
                <p className="PotsStatus rbottom">
                    R5:{redArrow.RBottom.length}
                </p>
                <p className="PotsStatusB bleft">B1:{blueArrow.BLeft.length}</p>
                <p className="PotsStatusB bright">
                    B2:{blueArrow.BRight.length}
                </p>
                <p className="PotsStatusB btop">B3:{blueArrow.BTop.length}</p>
                <p className="PotsStatusB bcenter">
                    B4:{blueArrow.BCenter.length}
                </p>
                <p className="PotsStatusB  bbottom">
                    B5:{blueArrow.BBottom.length}
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        arrowNumber: state.arrowList.numberOfArrows,
        redArrow: state.arrowList.redArrows,
        blueArrow: state.arrowList.blueArrows,
        // currentTime: state.timer.time,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        triggerAlert: (msg = 'Arrow Added', alertType = 'success') => {
            dispatch(setAlert(msg, alertType))
        },
        // deleteArrow: (id) => {
        //     dispatch(setAlert(id))
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameMap)
