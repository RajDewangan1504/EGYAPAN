import React, { useState } from 'react'
import styles from './styles.module.css'
import { useLocation } from 'react-router-dom';
import LogoComp from '../common/LogoComp'
import CustomTypo from '../common/CustomTypo/CustomTypo'
import CustomButton from '../common/CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CreateGyapan from '../dashboard/Creategyapan'
import { useSelector } from 'react-redux';
import  Drawer  from '../common/CustomDrawer/index';

export default function Header() {

  const drawerItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];
  const secondaryItems = ['All mail', 'Trash', 'Spam'];
  const auth = useSelector(state => state.authReducer.user);
  const [open, setOpen] = useState(false);
  console.log("auth", auth);

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
    {/* <Drawer drawerItems={drawerItems} secondaryItems={secondaryItems} logo={LogoComp}/> */}
      <div className='d-flex flex-row align-items-center justify-content-between gap-3'>
        <LogoComp />
        <h2 className={styles.page }>{getPageTitle()}</h2>

      </div>
      <div className='d-flex align-items-center gap-2'>
        <div className={`width-100 ${styles.header}`}>
          <CustomTypo variant={"h3"} fontSize={"1rem"} fontWeight={"500"}>
            {auth.user.name} {auth.user.tehsil}
          </CustomTypo>
          
        </div>
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
