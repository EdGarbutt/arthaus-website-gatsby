import React from 'react'

const ClientBlock = ({ data: { logo, alternative_text }, index }) => {
    const client_logo_id = "client-logo" + (index + 1);
    const animation_delay_time = ((index + 1) * 0.25) + "s";

    return (
        <div className="col-md-15 col-xs-6">
            <img
                style={{animationDelay: animation_delay_time}}
                id={client_logo_id}
                className="client-logo animated wow fadeIn"
                src={logo}
                alt={alternative_text}
            />
        </div>
    )
}

export default ClientBlock
