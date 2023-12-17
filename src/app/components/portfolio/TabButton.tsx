import React, { FC } from 'react'

export const TabButton: FC<any> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'text-white border-b-2 border-green-600' : 'text-[#ADB7BE]';
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>{children}</p>
    </button>
  )
}
