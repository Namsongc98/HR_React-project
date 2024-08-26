import React from 'react'

const SpanTable = ({ text, statusClass }) => {
    return (
        <span className={statusClass}>
            {text}
        </span>
    )
}

export default SpanTable
