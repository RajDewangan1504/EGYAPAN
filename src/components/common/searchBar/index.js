import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './styles.module.css'

export default function SearchBar({
    placeholder,
    name,
    onChange,

}) {
    return (
        <div>
     <div className={`position-relative mr-1 `}>
            <FontAwesomeIcon icon={"fa-solid fa-magnifying-glass"} className={`position-absolute cursor-pointer ${styles.searchIcon_2} `} />
            <input
                type="text"
                placeholder={placeholder}   
                onChange={onChange}
                className={styles.searchInput}
            />
            {/* <FontAwesomeIcon icon="fa-solid fa-sliders" className={`position-absolute cursor-pointer ${styles.searchIcon}`} /> */}
         </div>
        </div>
    )
}
