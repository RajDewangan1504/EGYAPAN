import React, { useState } from 'react'
import styles from './styles.module.css'
import LogoComp from '../common/LogoComp'
import CustomTypo from '../common/CustomTypo/CustomTypo'
import CustomButton from '../common/CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CreateGyapan from '../dashboard/Creategyapan'

export default function Header() {

  
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.main}>
      <LogoComp />
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
          open= {open}
          setOpen={setOpen}
        />
    </div>
  )
}
