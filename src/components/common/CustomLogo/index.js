import React from 'react'
import styles from './styles.module.css'


export default function CustomLogo() {
  return (
    <div className={styles.main}>
      <img src = {'assets/logo/logo.webp'} className={styles.img}/>
    </div>
  )
}
