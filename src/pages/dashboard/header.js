import React from 'react';
import styles from './styles.module.css';
import '../../global.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';

const DashboardHeader = () => {



    
    return (
        <div className={` d-flex align-items-center justify-content-end   ${styles.header}`}>
            
            <div className={`position-relative mr-2 ${styles.searchContainer}`}>
                <button>

                    <FontAwesomeIcon icon={faSearch} className={`position-absolute cursor-pointer ${styles.searchIcon_2} `}/>
                </button>


                <input
                    type="text"
                    placeholder="Bilaspur"
                    className={styles.searchInput}
                />
                <FontAwesomeIcon icon="fa-solid fa-sliders" className={`position-absolute cursor-pointer ${styles.searchIcon}`} />

            </div>
            <button className={`text-light cursor-pointer ${styles.createButton}`}>
                Create <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default DashboardHeader;
