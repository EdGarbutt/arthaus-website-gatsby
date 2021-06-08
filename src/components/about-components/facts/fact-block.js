import React from 'react'
import CountUp from 'react-countup'

const FactBlock = ({data: { top_text, numeric_value, measurement, bottom_text, colour }}) => {
    // let measurement_html = "";
    // if (measurement !== "") {
    //     measurement_html = React.createElement('span', { className: 'count-value' }, measurement)
    // }
    return (
        <div className="padding--none counter-wrap">
            <div className="counter-item text-center">
                <p className="smallText1 top">{top_text}</p>
                <p className={"subHead text--" + colour}>
                    <span className="count-value" data-count={numeric_value}><CountUp end={numeric_value} duration={5} suffix={measurement} /></span>
                </p>
                <p className="smallText1 bottom">{bottom_text}</p>
            </div>
        </div>
    )
}

export default FactBlock