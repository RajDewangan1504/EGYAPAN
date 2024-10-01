import React from 'react'
import styles from './styles.module.css'
import CustomTypo from '../CustomTypo/CustomTypo'

export default function LogoComp() {
    return (
        <div className={styles.container}>
            <img src={"assets/logo/logo.svg"} className={styles.main} />
            <CustomTypo className={styles.logoText}>E-Gyapan</CustomTypo>
        </div>

    )
}
