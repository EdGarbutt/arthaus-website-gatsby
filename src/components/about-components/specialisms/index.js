import React from 'react'

import Intro from '../../about-components/specialisms/introduction'
import SpecialismList from '../../about-components/specialisms/specialism-list'

const Specialisms = ({data: { introduction, specialism_list }}) => {

    return (
        <section id="specialisms" className="specialisms padding-b--30 padding-t--30">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-12 padding--none">
                        <div className="row">
                            <Intro data={introduction} />
                            <SpecialismList data={specialism_list} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Specialisms