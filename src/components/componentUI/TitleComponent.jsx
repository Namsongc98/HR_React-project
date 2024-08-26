import React from 'react'
import BackRouterIcon from '../../assets/icon/BackRouterIcon.svg'
import { useNavigate } from 'react-router'

const TitleComponent = ({ title, backRouterBoolean = false }) => {
  const navigate = useNavigate()
  const handleClickBackRow = () => {
    navigate(-1)
  }
  return (
    <div className="row align-center">
      {backRouterBoolean &&
        <div className="mr-1" onClick={handleClickBackRow}>
          <img src={BackRouterIcon} alt="" />
        </div>
      }
      <h3 className="font-weight-8 font-xxl">{title}</h3>
    </div>
  )
}

export default TitleComponent
