import React from 'react'
import '../css/all.css'
import '../css/fontawesome.css'
export default function Actions({ icon, type, id, onIconClick }) {
    const handelIconClick = () => {
        onIconClick(id, type)
    }

    return (
        <span >
            <i className={icon}
                onClick={handelIconClick}
                style={{ cursor: 'pointer', marginLeft: '10px', marginRight: '10px' }}></i>
        </span>
    )
}
