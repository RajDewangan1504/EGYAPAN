import React from 'react'
import styles from './styles.module.css'

export default function LogoComp() {
    return (
        <div className={styles.container}>
            <img src={"assets/logo/logo.svg"} className={styles.main} />
            
        </div>

    )
}
