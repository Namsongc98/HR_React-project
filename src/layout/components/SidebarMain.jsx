
import React from 'react'
import { NavLink } from 'react-router-dom'
import { linkToRouter } from './const/RouterMain'

export const SidebarMain = () => {
  return (
    <nav className="">
      <ul className='mt-32'>
        {linkToRouter?.map((item) => (
          <li className='font-600 font-md display-flex align-center' key={item.id}>
            <NavLink className='pl-16 display-flex align-center' to={item.to}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
