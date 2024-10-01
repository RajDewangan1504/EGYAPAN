import React from 'react'
import PatwariTable from '../../components/patwari/patwariTable'
import styles from './styles.module.css'
import VillageTable from '../../components/patwari/villageTable'

export default function Patwari() {
  return (
    <div className={styles.main}>
        <PatwariTable/>
        <VillageTable />
    </div>
  )
}
