import React from 'react';

const SubNav = () => {

    return (
        <div className="bkg--white">
            <nav className="sub-nav">
                <div className="opt active">
                    <a className="scroll" href="#facts" rel="noopener noreferrer">
                        <span>FACTS</span>
                    </a>
                </div>
                <div className="opt">
                    <a className="scroll" href="#people" rel="noopener noreferrer">
                        <span>PEOPLE</span>
                    </a>
                </div>
                <div className="opt">
                    <a className="scroll" href="#clients" rel="noopener noreferrer">
                        <span>CLIENTS</span>
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default SubNav;