import React from 'react'

const SpecialismItem = ({ data: { title, icon_url, colour, alternative_text } }) => {

    return (
        <div className="spec-wrap padding-l--5 padding-r--5">
            <div className={"display-flex direction-col align-center border padding-b--25 padding-t--25 border--" + colour}>
                <figure className="spec-icon">
                    <img src={icon_url} alt={alternative_text} />
                </figure>

                <p className={"strong smallText2 text-center smallText2--" + colour}>
                    {title}
                </p>
            </div>
        </div>
    )
}

export default SpecialismItem