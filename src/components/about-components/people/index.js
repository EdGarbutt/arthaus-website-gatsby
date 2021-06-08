import React from 'react'

import Employee from '../people/employee'

const People = ({ data: { title, body, employees } }) => {
    return (
        <section id="people" className="animated padding-b--30 padding-t--30">
            <div className="row">
            <div className="col-xs-12 col-md-12">
                <div className="row">
                <h2 className="heading2 heading2--green strong text-center padding-b--18">
                    {title}
                </h2>

                <p className="bodyText text-center" style={{margin: "0 auto"}}>
                    {body}
                </p>
                </div>

                <div id="staff-list" className="row padding-l--15 padding-r--15 padding-b--20">
                    <div className="staff-list" style={{paddingLeft: 0}}>
                        {employees.map((employee, index) => {
                            return <Employee key={index} data={employee} />
                        })}
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default People