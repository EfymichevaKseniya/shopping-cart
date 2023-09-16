import React, { PropsWithChildren } from 'react';
import './layout.css'
import { Header } from '@/shared/header/header';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='layout'>
      {children}
    </div>
  )
}