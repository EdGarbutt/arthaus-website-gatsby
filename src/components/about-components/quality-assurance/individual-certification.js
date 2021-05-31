import React, { Fragment } from 'react'

const IndividualCertification = ({ data: { name, logo, logo_class_name, logo_alternative_text, description }}) => {
    return (
        <Fragment>
            <p className="subHead padding-b--18 text-center">
                {name}
            </p>
            <div className="display-flex align-center flex-wrap">
                <p className="col-md-3 col-xs-12 text-center">
                    <img className={logo_class_name} src={logo} alt={logo_alternative_text} />
                </p>
                <p className="bodyText col-md-9 col-xs-12 text-left">
                    {description}
                </p>
            </div>
        </Fragment>
    )
}

export default IndividualCertification
