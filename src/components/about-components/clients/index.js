import React, { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

import ClientBlock from '../clients/client-block'

const Clients = ({ data: { title, description, client_list } }) => {

    const [logosAnimated, setLogosAnimated] = useState(false);

    const onEnterViewport = () => {
        setLogosAnimated(true);
    }

    return (
        <ScrollTrigger onEnter={onEnterViewport}>
            <section id="clients" className={`animated padding-b--30 padding-t--30${logosAnimated ? ' animation' : ''}`}>
                <div className="container-fluid">
                    <div className="row white">
                        <h2 className="strong heading2 heading2--mainOrange padding-b--18">
                            {title}
                        </h2>
                        <p style={{}} className="subHead padding-b--18">
                            {description}
                        </p>
                        {client_list.map((client, index) => {
                            return <ClientBlock key={index} data={client} index={index} />
                        })}
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    )
}

export default Clients