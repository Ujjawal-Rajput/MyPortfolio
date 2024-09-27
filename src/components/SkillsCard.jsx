import React from 'react'

function SkillsCard(props) {
    return (

        <div className="package">
            <div className="package2">
                <i className={props.icon}></i>
                <p>{props.tech}</p>
            </div>
        </div>

    )
}

export default SkillsCard
