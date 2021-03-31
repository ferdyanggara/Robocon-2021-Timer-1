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
    arrowsData,
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
                        addingArrow('RLeft', arrowNumber, timeElapsed)
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
                        addingArrow('RRight', arrowNumber, timeElapsed)

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
                        addingArrow('BTop', arrowNumber, timeElapsed)

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
                        addingArrow('BBottom', arrowNumber, timeElapsed)
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
                        addingArrow('BCenter', arrowNumber, timeElapsed)
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
                        addingArrow('BLeft', arrowNumber, timeElapsed)

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
                        addingArrow('BRight', arrowNumber, timeElapsed)

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
                        addingArrow('RTop', arrowNumber, timeElapsed)

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
                        addingArrow('RBottom', arrowNumber, timeElapsed)
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
                        addingArrow('RCenter', arrowNumber, timeElapsed)
                        triggerAlert('Arrow Added at Pot Red Center', 'success')
                    }}
                    hover="true"
                />
            </map>

            <div>
                <p className="PotsStatus rleft">R1:{arrowsData.RLeft.length}</p>
                <p className="PotsStatus rright">
                    R2:{arrowsData.RRight.length}
                </p>
                <p className="PotsStatus rtop">R3:{arrowsData.RTop.length}</p>
                <p className="PotsStatus rcenter">
                    R4:{arrowsData.RCenter.length}
                </p>
                <p className="PotsStatus rbottom">
                    R5:{arrowsData.RBottom.length}
                </p>
                <p className="PotsStatusB bleft">
                    B1:{arrowsData.BLeft.length}
                </p>
                <p className="PotsStatusB bright">
                    B2:{arrowsData.BRight.length}
                </p>
                <p className="PotsStatusB btop">B3:{arrowsData.BTop.length}</p>
                <p className="PotsStatusB bcenter">
                    B4:{arrowsData.BCenter.length}
                </p>
                <p className="PotsStatusB  bbottom">
                    B5:{arrowsData.BBottom.length}
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        arrowNumber: state.arrowList.numberOfArrows,
        arrowsData: state.arrowList.arrows,
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
