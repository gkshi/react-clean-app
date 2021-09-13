import React from 'react'
import { openModal } from '../../store/modals/events'

import './_index.scss'

function HomePage () {
  const openSampleModal = () => {
    openModal('sample')
  }

  return (
    <div className="page -home">
      <div>home page</div>
      <div>
        <a href="#" onClick={openSampleModal}>open sample modal</a>
      </div>
    </div>
  )
}

export default HomePage
