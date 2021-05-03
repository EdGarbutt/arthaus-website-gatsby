import React from 'react'

const HomeBlock = (props) => {
    const cell = props.data;

    let cell_content = [];

    if (cell.url) {
        cell_content.push(
            React.createElement('a', { class: 'social-post__link', 
            rel: 'noopener noreferrer', href: cell.url }, 'Read more')
        );
    }

    if (cell.content.standard) {
        cell.content.standard.map(x =>
            cell_content.push(
                React.createElement(
                    x.html_tag, 
                    (x.classes ? { class: x.classes.join(' ') } : {}),
                    x.text
                )
            )
        )
    }

    if (cell.content.top) {
        cell_content.push(
            React.createElement('div', { class: 'top' },
                cell.content.top.map(x => 
                    React.createElement(
                        x.html_tag, 
                        (x.classes ? { class: x.classes.join(' ') } : {}),
                        x.text
                    )
                )
            )
        );
    }

    if (cell.content.bottom) {
        console.log(cell.content.bottom);
        cell_content.push(
            React.createElement('div', { class: 'bottom' },
                cell.content.bottom.map(x => 
                    React.createElement(
                        x.html_tag, 
                        (x.classes ? { class: x.classes.join(' ') } : {}), 
                        x.text
                    )
                )
            )
        );
    }

    if (cell.url) {
        cell_content.push(
            React.createElement('span', { class: 'plus-icon fa fa-plus-circle' }, '')
        );  
    }

    return (
        <div className={cell.classes.join(' ')}>
            {React.createElement('div', { class: 'content' }, cell_content)}
        </div>
    )
}

export default HomeBlock