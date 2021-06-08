import React from 'react'

const Employee = ({data: { name, role, image_url, alternative_text }}) => {
    return (
        <div className="staff-card"> 
            <img className="staff-img" src={image_url} alt={alternative_text} />
            <p className="smallText2 padding-t--10 text-left staff-name">{name}</p>
            <p className="smallText1 text-uppercase staff-role text-left padding-b--10">{role}</p>
        </div>
    )
}

export default Employee