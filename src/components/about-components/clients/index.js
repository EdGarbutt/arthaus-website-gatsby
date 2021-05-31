import React from 'react'

import ClientBlock from '../clients/client-block'

const Clients = ({ data: { title, description, client_list } }) => {
    return (
        <section id="clients" className="animated wow fadeIn padding-b--30 padding-t--30" data-wow-duration="2s" >
            <div className="container-fluid">
                <div className="row white">
                    <h2 className="strong heading2 heading2--mainOrange padding-b--18">
                        {title}
                    </h2>
                    <p style={{}} className="subHead padding-b--18">
                        {description}
                    </p>
                    {client_list.map((client, index) => {
                        return <ClientBlock data={client} index={index} />
                    })}
                </div>
            </div>
        </section>
    )
    
}

export default Clients