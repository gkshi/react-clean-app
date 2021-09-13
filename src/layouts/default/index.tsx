import React from 'react'

import './_index.scss'

import HeaderComponent from '../../components/header'

interface LayoutProps {
  children?: React.ReactNode
}

function DefaultLayout ({ children }: LayoutProps) {
  return (
    <div className="layout -default">
      <HeaderComponent />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </div>
  )
}

export default DefaultLayout
