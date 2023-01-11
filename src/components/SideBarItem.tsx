import React from 'react'
import { NavLink } from 'react-router-dom'

interface IProps {
  to: string;
  text: string;
  icon: React.ReactNode
  isExact?: boolean;
}

interface INavData {
  isActive: boolean
}

const SideBarItem = (props: IProps) => {
  return (
    <NavLink  end={props.isExact}  to={props.to} className={(navData: INavData) => `flex items-center space-x-2 p-3 rounded-lg ${navData.isActive ? "text-white bg-black" : "bg-white"}`}>
      {props.icon}
      <div>{props.text}</div>
    </NavLink>
  )
}

export default SideBarItem