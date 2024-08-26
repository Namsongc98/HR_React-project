import React from 'react'

const TextareaComponent = ({ dataTextarea }) => {
    const { label, onChange, name, ...res } = dataTextarea

    const handleInputChange = (event, name) => {
        const value = event.target.value
        onChange(value, name)
    }
    return (
        <div>
            <p className="mt-08 mb-09 label">{label}</p>
            <div className="w-full h-full wp-txt_area">
                <textarea {...res} onChange={(event) => handleInputChange(event, name)} className="w-full h-full font-md "></textarea>
            </div>
        </div>
    )
}

export default TextareaComponent