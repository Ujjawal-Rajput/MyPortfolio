import React from 'react'

function Project_card(props) {
    return (
        <div className='card'>
            <img src={props.pic} />
            <div>
                <p>{props.caption}<span>{props.type}</span></p>
                <p style={{ color: "#808DAD" }}>{props.text}</p>
                <a href={props.url} target='__blank'>Go To Site</a>
            </div>
        </div>
    )
}

export default Project_card
