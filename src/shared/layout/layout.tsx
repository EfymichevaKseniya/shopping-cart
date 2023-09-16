import React, { PropsWithChildren } from 'react';
import './layout.css'

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='layout'>
      {children}
    </div>
  )
}