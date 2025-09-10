    import React from 'react'
    import { stats } from '../Data'
    import parse from 'html-react-parser'

    const Stats = () => {
    return (
        <>
        {stats.map(({no, title}, index) => {
            return (
                <div className="status-box" key={index}>
                    <div className="status-no">{no}</div>
                    <p className="status-title">{parse(title)}</p>
                </div>
            )
        })}
        </>
    )
    }

    export default Stats