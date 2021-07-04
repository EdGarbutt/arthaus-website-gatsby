import React from 'react'

import TopList from './top-list'
import BottomList from './bottom-list'

const ToolKit = ({ data }) => {
    
    let top_toolkit_list = []
    let bottom_toolkit_list = []

    if (data.length > 7) {
        const sixth_entry = data[5]
        top_toolkit_list = data.splice(0, 5)
        top_toolkit_list.push(sixth_entry)
        bottom_toolkit_list = data
    }

    console.log('Top: ', top_toolkit_list)
    console.log('Bottom: ', bottom_toolkit_list)
    

    
    return (
        <section>
            <TopList data={top_toolkit_list} />
            <BottomList data={bottom_toolkit_list} />
        </section>
    )
}

export default ToolKit
