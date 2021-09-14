import React from 'react'
import { openModal } from '../../store/modals/events'

import UIButton from '../../components/ui/button'

import './_index.scss'

function HomePage () {
  const openSampleModal = () => {
    openModal('sample')
  }

  return (
    <div className="page -home">
      <div>home page</div>
      <div>
        <UIButton onClick={openSampleModal}>open sample modal</UIButton>
      </div>
    </div>
  )
}

export default HomePage
