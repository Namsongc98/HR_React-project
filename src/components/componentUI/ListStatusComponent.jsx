import React, { useState } from 'react'

const ListStatusComponent = ({ dataStatus }) => {
    const { listStatus, filterData } = dataStatus
    const [selectIndex, setSelectIndex] = useState(1)
    const handleClick = (item) => {
        setSelectIndex(item.id)
        filterData(item)
    }
    return (
        <div className=" row align-center justify-space-between mt-24 mb-16 gap-flex-24  ">
            {listStatus?.map((item) => (
                <p
                    className={`font-600 cursor-pointer font-lg ${selectIndex === item.id ? 'text-purple' : 'text-gray'}`}
                    key={item.id}
                    onClick={() => handleClick(item)}
                >
                    {`${item.status}  ${item?.counter ? "( " + item.counter + " )" : ""} `}

                </p>

            ))}
        </div >
    )
}

export default ListStatusComponent