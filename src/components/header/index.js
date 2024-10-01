import React, { useState } from 'react'
import styles from './styles.module.css'
import { useLocation } from 'react-router-dom';
import LogoComp from '../common/LogoComp'
import CustomTypo from '../common/CustomTypo/CustomTypo'
import CustomButton from '../common/CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CreateGyapan from '../dashboard/Creategyapan'

export default function Header() {


  const [open, setOpen] = useState(false);

  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/patwari':
        return 'Patwari';
      case '/addpatwari':
        return 'Add Patwari';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className={styles.main} >
      <div className='d-flex flex-row align-items-center justify-content-between gap-7'>
        <LogoComp />
        <h2 className={styles.page}>{getPageTitle()}</h2>

      </div>
      <div className='d-flex align-items-center gap-2'>
        <CustomTypo variant={"h3"} fontSize={"1rem"} fontWeight={"500"}>
          Tehsil Ratanpur
        </CustomTypo>
        <div>
          <CustomButton
            text={"Create"}
            onClick={() => { setOpen(true) }}
            startIcon={<FontAwesomeIcon icon="fa-solid fa-plus" fontSize={"10px"} />}
          />
        </div>


      </div>
      <CreateGyapan
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}
