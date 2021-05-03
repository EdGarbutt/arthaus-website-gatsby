import React from 'react'

const HomeBlock = (props) => {
    const cell = props.data;

    let cell_content = [];

    if (cell.url) {
        cell_content.push(
            React.createElement('a', { className: 'social-post__link', 
            rel: 'noopener noreferrer', href: cell.url }, 'Read more')
        );
    }

    if (cell.content.standard) {
        cell.content.standard.map(x =>
            cell_content.push(
                React.createElement(
                    x.html_tag, 
                    (x.classes ? { className: x.classes.join(' ') } : {}),
                    x.text
                )
            )
        )
    }

    if (cell.content.top) {
        cell_content.push(
            React.createElement('div', { className: 'top' },
                cell.content.top.map(x => 
                    React.createElement(
                        x.html_tag, 
                        (x.classes ? { className: x.classes.join(' ') } : {}),
                        x.text
                    )
                )
            )
        );
    }

    if (cell.content.bottom) {
        cell_content.push(
            React.createElement('div', { className: 'bottom' },
                cell.content.bottom.map(x => 
                    React.createElement(
                        x.html_tag, 
                        (x.classes ? { className: x.classes.join(' ') } : {}), 
                        x.text
                    )
                )
            )
        );
    }

    if (cell.url) {
        cell_content.push(
            React.createElement('span', { className: 'plus-icon fa fa-plus-circle' }, '')
        );  
    }

    return (
        <div className={cell.classes.join(' ')}>
            {React.createElement('div', { className: 'content' }, cell_content)}
        </div>
    )
}

export default HomeBlock