import React from 'react'
import { Link } from 'react-router5'

import './_index.scss'

function HeaderComponent () {
  return (
    <div className="component -header">
      <nav>
        <div>
          <Link routeName="home">home</Link>
        </div>
        <div>
          <Link routeName="about">about</Link>
        </div>
      </nav>
    </div>
  )
}

export default HeaderComponent
