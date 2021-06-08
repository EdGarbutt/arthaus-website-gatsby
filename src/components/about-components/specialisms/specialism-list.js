import React from 'react'

import SpecialismListItem from '../specialisms/specialism-list-item'

const SpecialismList = ({ data }) => {
    return (
        <div className="col-md-6 display-flex flex-wrap justify-end padding-l--none spec-list">
            {data.map((item, index) => {
                return <SpecialismListItem key={index} data={item} />
            })}
        </div> 
    )
}

export default SpecialismList