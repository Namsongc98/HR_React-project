import React from 'react'
import iconMenuHeader from '../../assets/icon/iconMenuHeader.svg'
import { Header } from 'antd/es/layout/layout'

export const HeaderMain = () => {
  return (
    <Header className="row justify-space-between align-center w-full bg-purple pt-16 pr-14 pb-16 pl-14">
      <div className="row align-center">
        <img src={iconMenuHeader} alt="" />
        <div className="font-md font-6 row align-center ml-2">
          <span className="text-white">Power Apps</span>
          <div className="slice"></div>
          <span className="text-white">JLL HRWS</span>
        </div>
      </div>
    </Header>
  )
}
