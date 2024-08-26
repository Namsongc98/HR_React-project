import React from 'react'

const ItemEducation = ({ reverse = false }) => {
  return (
    <div className="pt-0_8 pb-0_8">
      <h1 className="font-7 font-lg">
        AAA Company <span className="font-6 font-md">(Tertiary school)</span>
      </h1>
      <div className={`row gap-flex-60 ${reverse && 'flex-reverse'}}`}>
        <div className="row">
          <div className="mr-0_8 font-4">
            <span className="text-gray_text mr-0_8">From</span>
            <span>01/02/2020</span>
          </div>
          <div className="">
            <span className="text-gray_text mr-0_8">To</span>
            <span>01/02/2020</span>
          </div>
        </div>
        <div className="">
          <span className="text-gray_text mr-0_8">Major subject & Level attained:</span>
          <span>Biology</span>
        </div>
      </div>
    </div >
  )
}

export default ItemEducation
