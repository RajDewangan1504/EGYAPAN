import { Dialog, Modal } from '@mui/material'
import React from 'react'
import {SyncLoader} from 'react-spinners'
import styles from './styles.module.css'
import { bgColor } from '../../Utils'


export default function Loading() {
  return (
    <Modal open = {true} className={styles.main}>
      <SyncLoader color={bgColor.primary}/>
    </Modal>
  )
}
