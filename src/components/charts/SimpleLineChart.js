import React from 'react'
import { Line } from '@ant-design/charts'
const Page = ({ avg }) => {
    // console.log('avg: ', typeof avg)
    // console.log('avg content: ')

    const MsToTime = (s) => {
        var ms = s % 1000
        s = (s - ms) / 1000
        var secs = s % 60
        s = (s - secs) / 60
        var mins = s % 60
        var hrs = (s - mins) / 60

        return hrs + ':' + mins + ':' + secs + '.' + ms
    }

    const data = [avg][0]
    const config = {
        // avg,
        data,
        xField: 'arrowId',
        yField: 'averageTime',
        // theme: 'dark',
        point: {
            size: 5,
            shape: 'diamond',
        },
        width: 600,
        height: 500,
        // tooltip: {
        //     customContent: (title = 'Arrow: ', items) => {
        //         return (
        //             <>
        //                 <h5 style={{ marginTop: 16 }}>{title}</h5>
        //                 <ul style={{ paddingLeft: 0 }}>
        //                     {items?.map((item, index) => {
        //                         const { arrow, averageTime } = item
        //                         return (
        //                             <li
        //                                 key={averageTime}
        //                                 className="g2-tooltip-list-item"
        //                                 data-index={index}
        //                                 style={{
        //                                     marginBottom: 4,
        //                                     display: 'flex',
        //                                     alignItems: 'center',
        //                                 }}
        //                             >
        //                                 <span
        //                                     className="g2-tooltip-marker"
        //                                     style={{ backgroundColor: 'blue' }}
        //                                 >
        //                                     Average Time:
        //                                 </span>
        //                                 <span
        //                                     style={{
        //                                         display: 'inline-flex',
        //                                         flex: 1,
        //                                         justifyContent: 'space-between',
        //                                     }}
        //                                 >
        //                                     <span style={{ margiRight: 16 }}>
        //                                         {arrow}:
        //                                     </span>
        //                                     <span className="g2-tooltip-list-item-value">
        //                                         {/* {averageTime} */}1
        //                                     </span>
        //                                 </span>
        //                             </li>
        //                         )
        //                     })}
        //                 </ul>
        //             </>
        //         )
        //     },
        // },
        // padding: [5, 5, 5, 5],
    }
    return <>{avg.length > 0 ? <Line {...config} /> : 'loading'}</>
    // return <h1>hi</h1>
}
export default Page
