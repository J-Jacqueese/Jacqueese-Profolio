"use client"
import React from 'react'
import NavLink from './NavLink'
import { NavigationItem } from '../types/navlink'



const MenuOverLay = (props: { navLinks: NavigationItem[] }) => {
  const { navLinks } = props
  return (
    <ul className='flex flex-col py-4 items-center'>
      {navLinks.map((item, index) => (<li key={index}><NavLink href={item.path} title={item.title}></NavLink></li>))}
    </ul>
  )
}

export default MenuOverLay