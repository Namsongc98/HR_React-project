import React from 'react'

const ItemProfile = () => {
    return (
        <div className="display-flex flex-column gap-flex-0_4">
            <div className="display-flex align-center">
                <span className="title_item text-gray_text">Job title:</span>
                <span>Web App Developer (PHP/C#/.Net/JavaScript)</span>
            </div>
            <div className="display-flex align-center">
                <span className="title_item text-gray_text">Date available:</span>
                <span>08/08/2024</span>
            </div>
            <div className="display-flex align-center">
                <span className="title_item text-gray_text">Salary expected:</span>
                <span>$2000</span>
            </div>
        </div>
    )
}

export default ItemProfile
