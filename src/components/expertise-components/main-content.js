import React, { Fragment } from 'react'

import ExpertiseType from '../expertise-components/expertise-type'

const MainContent = ({ data }) => {
    return (
        data.map((expertise_type, index) => {
            return <ExpertiseType key={index} data={expertise_type} />
        })        
    )
}

export default MainContent
