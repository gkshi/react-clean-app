import React from 'react'
import { closeModal } from '../../../store/modals/events'

import ModalWrapper from '../wrapper'

import './_index.scss'

function DeleteItemModal () {
  const id = 'sample'

  const onOpen = () => {}

  const onConfirm = () => {}

  return (
    <ModalWrapper id={id} onOpen={onOpen} onConfirm={onConfirm}>
      <div className="modal-title">Sample modal</div>
      <div className="modal-subtitle">
        subtitle
      </div>
      <div className="modal-buttons buttons">
        <button onClick={() => closeModal(id)}>close</button>
      </div>
    </ModalWrapper>
  )
}

export default DeleteItemModal
