import React from 'react'
import Timer from '../components/timer/timer'
import Arrow from '../components/arrow-list/arrow'
import AlertIcon from '../components/layout/AlertIcon';
const Main = () => {
    const arrowBullet = [];
    for (let i = 0; i < 5; i++) {
        arrowBullet.push(<Arrow arrowId={i} key={i} />)
    }


    return (
        <div>
            <div>
                <AlertIcon />
                <Timer />
            </div>
            {/* <div>
            <Arrow barrelNo={1}/>
            <Arrow barrelNo={2}/>
            </div> */}
        </div>
    )
}

export default Main
