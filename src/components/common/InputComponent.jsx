import React from 'react'

const InputComponent = ({ dataInput }) => {
    const { onChange, label, name, ...res } = dataInput
    const handleInputChange = (event, name) => {
        const value = event.target.value
        onChange(value, name)
    }
    return (
        <div className="wrapper-input">
            <label className="label">{label}</label>
            <div className="wp-input">
                <input {...res} onChange={(event) => handleInputChange(event, name)} className="w-full h-full font-md" />
            </div>
        </div>
    )
}

export default InputComponent
