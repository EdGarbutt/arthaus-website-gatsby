import React from 'react'

import SpecialismListItem from '../specialisms/specialism-list-item'

const SpecialismList = ({ data }) => {
    console.log("Test", data)
    return (
        <div className="col-md-6 display-flex flex-wrap justify-end padding-l--none spec-list">
            {data.map(item => {
                return <SpecialismListItem data={item} />
            })}
            {/* <div className="spec-wrap padding-l--5 padding-r--5">
                <div className="display-flex direction-col align-center border border--burgundy padding-b--25 padding-t--25">
                    <figure className="spec-icon">
                        <img src={EmployeeEngagementIcon} alt="icon represent employee engagement aspect" />
                    </figure>

                    <p className="strong smallText2 smallText2--burgundy text-center">
                        Employee<br />
                        engagement
                    </p>
                </div>
            </div>
            <div className="spec-wrap padding-l--5 padding-r--5">
                <div className="display-flex direction-col align-center border border--darkBlue padding-b--25 padding-t--25">
                    <figure className="spec-icon">
                        <img src={MarketingCommunicationsIcon} alt="icon represent marketing communications aspect" />
                    </figure>

                    <p className="strong smallText2 smallText2--darkBlue text-center">
                        Marketing<br />
                        communications
                    </p>
                </div>
            </div>
            <div className="spec-wrap padding-l--5 padding-r--5">
                <div className="display-flex direction-col align-center border border--green padding-b--25 padding-t--25">
                    <figure className="spec-icon">
                        <img src={TalentManagementIcon} alt="icon represent talent management aspect" />
                    </figure>

                    <p className="strong smallText2 smallText2--green text-center">
                        Talent<br />
                        management
                    </p>
                </div>
            </div>

            <div className="spec-wrap padding-l--5 padding-r--5">
                <div className="display-flex direction-col align-center border border--mainOrange padding-b--25 padding-t--25">
                    <figure className="spec-icon">
                        <img src={EmployeeBrandingIcon} alt="icon represent employer branding aspect" />
                    </figure>

                    <p className="strong smallText2 smallText2--mainOrange text-center">
                        Employer<br />
                        branding
                    </p>
                </div>
            </div>
            <div className="spec-wrap padding-l--5 padding-r--5">
                <div className="display-flex direction-col align-center border border--teal padding-b--25 padding-t--25">
                    <figure className="spec-icon">
                        <img src={InternalCommunicationsIcon} alt="icon represent internal communications aspect" />
                    </figure>

                    <p className="strong smallText2 smallText2--teal text-center">
                        Internal<br />
                        communications
                    </p>
                </div>
            </div>
            <div className="spec-wrap padding-l--5 padding-r--5">
                <div className="display-flex direction-col align-center border border--navy padding-b--25 padding-t--25">
                    <figure className="spec-icon">
                        <img src={EmployeeDevelopmentIcon} alt="icon represent employee development aspect" />
                    </figure>

                    <p className="strong smallText2 smallText2--navy text-center">
                        Employee<br />
                        development
                    </p>
                </div>
            </div>*/}
        </div> 
    )
}

export default SpecialismList