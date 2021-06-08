import React from 'react'

const Introduction = ({data: { heading, body }}) => {
    return (
        <div className="col-md-6">
            <h2 className="heading2 strong text-left heading2--burgundy padding-b--18">
                {heading}
            </h2>

            {body.map((text, index) => {
                let bodyClasses = ["bodyText"];
                if (index !== (body.length - 1)) {
                    bodyClasses.push("padding-b--10");
                }
                return <p key={index} className={bodyClasses.join(" ")}>{text}</p>
            })}
        </div>
    )
}

export default Introduction