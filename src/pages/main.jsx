import React from 'react'
import Timer from '../components/timer/timer'
import Arrow from '../components/arrow-list/arrow'

const Main = () => {
    const arrowBullet = [];
    for(let i = 0; i < 5; i++){
        arrowBullet.push(<Arrow arrowId={i} key={i}/>)
    }


    return (
        <div>
            <div>
            <Timer/>
            </div>
            <div>
            <Arrow/>
            </div>
        </div>
    )
}

export default Main
