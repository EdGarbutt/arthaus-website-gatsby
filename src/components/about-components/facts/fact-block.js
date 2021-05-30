import React from 'react'

const FactBlock = ({data: { top_text, numeric_value, measurement, bottom_text, colour }}) => {
    let measurement_html = "";
console.log(colour);
    if (measurement !== "") {
        measurement_html = React.createElement('span', { className: 'count-value' }, measurement)
    }
    return (
        <div className="padding--none counter-wrap">
            <div className="counter-item text-center wow fadeIn" data-wow-duration="1s">
                <p className="smallText1 top">{top_text}</p>
                <p className={"subHead text--" + colour}>
                    <span className="count-value" data-count={numeric_value}>0</span>
                    {measurement_html}
                </p>
                <p className="smallText1 bottom">{bottom_text}</p>
            </div>
        </div>
    )
}

export default FactBlock