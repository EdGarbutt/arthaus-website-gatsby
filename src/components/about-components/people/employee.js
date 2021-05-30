import React from 'react'

const Employee = ({data: { name, role, image_url, alternative_text }}) => {
    return (
        <li class="staff-card padding-b--20"> 
            <img class="staff-img" src={image_url} alt={alternative_text} />
            <p class="smallText2 padding-t--10 text-left staff-name">{name}</p>
            <p class="smallText1 text-uppercase staff-role text-left padding-b--10">{role}</p>
        </li>
    )
}

export default Employee