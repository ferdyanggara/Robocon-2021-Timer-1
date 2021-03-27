import React, { Component } from 'react'
import GameFieldImage from './GameField.png'
import './map.css'
import { setAlert } from '../../redux/actions/alertAction'
import { connect } from 'react-redux'

const GameMap = ({ addingArrow, arrowNumber, timeElapsed, triggerAlert }) => {
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

                        triggerAlert()
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

                        triggerAlert()
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

                        triggerAlert()
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
                        triggerAlert()
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
                        triggerAlert()
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

                        triggerAlert()
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

                        triggerAlert()
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

                        triggerAlert()
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
                        triggerAlert()
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
                        triggerAlert()
                    }}
                    hover="true"
                />
            </map>

            <div>
                <p className="PotsStatus p0">
                    {/* {this.props.arrowNumbers[5]} */}
                    {/* hi */}
                    <br />
                </p>
                {/* <p className="PotsStatus p1">
                    {this.props.arrowNumbers[0]} <br />
                </p>
                <p className="PotsStatus p2">
                    {this.props.arrowNumbers[2]} <br />
                </p>
                <p className="PotsStatus p3">
                    {this.props.arrowNumbers[4]} <br />
                </p>
                <p className="PotsStatus p4">
                    {this.props.arrowNumbers[3]} <br />
                </p>
                <p className="PotsStatus p5">
                    {this.props.arrowNumbers[7]} <br />
                </p>
                <p className="PotsStatus p6">
                    {this.props.arrowNumbers[9]} <br />
                </p>
                <p className="PotsStatus p7">
                    {this.props.arrowNumbers[8]} <br />
                </p>
                <p className="PotsStatus p8">
                    {this.props.arrowNumbers[6]} <br />
                </p>
                <p className="PotsStatus p9">
                    {this.props.arrowNumbers[1]} <br />
                </p> */}
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
