import React from 'react'

const DividerComponent = ({ marginSize, heightSize }) => {
    return (
        <div
            className="divider"
            style={{ marginTop: marginSize + 'px', marginBottom: marginSize + 'px', height: heightSize + 'px' }}
        ></div >
    )
}

export default DividerComponent
