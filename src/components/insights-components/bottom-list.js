import React from 'react'

import BlogIcon from '../../images/insights/icon_blog.png'
import InspirationIcon from '../../images/insights/icon_inspiration.png'
import SocialIcon from '../../images/insights/icon_socials.png'

import Block from './toolkit-block'

const BottomList = ({ data }) => {
    return (
        <div id="toolKitList_bottom">
            {data.map((tk, i) => {
                let block_id, block_type_icon
                let block_class = ['toolKit__block', 'block-c', tk.postType]

                if (i === 0) {
                    block_class.push('block-special')
                }

                switch (tk.type) {
                    case "blogPost":
                        block_type_icon = BlogIcon
                        break;
                    case "inspiration":
                        block_type_icon = InspirationIcon
                        break;
                    case "socialPost":
                        block_type_icon = SocialIcon
                        break;
                }

                const block_data = {
                    id: block_id,
                    classes: block_class,
                    title: tk.title,
                    image: tk.image,
                    url: tk.url,
                    type: tk.type,
                    type_icon: block_type_icon,
                    created: tk.created
                }
                
                return <Block data={block_data} />
            })}
        </div>
    )
}

export default BottomList
