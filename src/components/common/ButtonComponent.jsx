import React, { memo } from 'react'

const ButtonComponent = ({ dataButton }) => {
    const { styleBtn, ...rest } = dataButton
    return (
        <button
            className={'pt-08 pb-08 pl-32 pr-32 font-600 font-md cursor-pointer' + ' ' + dataButton.styleBtn}
            {...rest}
        >
            {dataButton.label}
        </button >
    )
}

export default memo(ButtonComponent) 
