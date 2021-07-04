import React from 'react'

const ToolKitBlock = ({ data }) => {
    let post_date_element;

    if (data.type === "blogPost") {
        const formattedDate = data.created.toLocaleDateString('en-GB', {
            day: 'numeric', month: 'short', year: 'numeric'
        }).replace(/ /g, ' ').toUpperCase();

        post_date_element = React.createElement(
            'p',
            {
                className: 'toolKit__title-createdAt'
            },
            formattedDate
        )
    }

    return (
        <a id={data.id} className={data.classes.join(' ')} target="_blank" href={data.url}>
            <figure className="toolKit__photo">
                <img className="photo" src={data.image} />
                <img className="toolKit__iconPostType" src={data.type_icon} />
            </figure>
            <div className="toolKit__title">
                {data.title}
            </div>
            {post_date_element}
        </a>
    )
}

export default ToolKitBlock
