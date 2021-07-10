import React from 'react'

import List from './toolkit-list'

const ToolKit = ({ data, filter }) => {
    let insight_grid_items = data
    if (filter !== 'all') {
        insight_grid_items = insight_grid_items.filter(function(toolkit_block) {
            return toolkit_block.type === filter
        })
    }
    return (
        <section>
            <List data={insight_grid_items} />
        </section>
    )
}

export default ToolKit
