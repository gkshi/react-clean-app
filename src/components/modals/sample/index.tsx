import React from 'react'
import { closeModal } from '../../../store/modals/events'

import ModalWrapper from '../wrapper'
import UIButton from '../../ui/button'

import './_index.scss'

function DeleteItemModal () {
  const id = 'sample'

  const onOpen = () => {}

  const onClose = () => {}

  const onConfirm = () => {
    closeModal(id)
  }

  return (
    <ModalWrapper id={id} onOpen={onOpen} onClose={onClose} onConfirm={onConfirm}>
      <div className="modal-title">Sample modal</div>
      <div className="modal-subtitle">
        subtitle
      </div>
      <div className="modal-buttons buttons">
        <UIButton size="small" onClick={onConfirm}>ok</UIButton>
        <UIButton size="small" theme="danger" onClick={onConfirm}>cancel</UIButton>
      </div>
    </ModalWrapper>
  )
}

export default DeleteItemModal
