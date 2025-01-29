import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { useLocation } from 'react-router-dom';
import LogoComp from '../common/LogoComp'
import CustomTypo from '../common/CustomTypo/CustomTypo'
import CustomButton from '../common/CustomButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CreateGyapan from '../dashboard/Creategyapan'
import { useSelector } from 'react-redux';
import Drawer from '../common/CustomDrawer/index';
import TemporaryDrawer from '../common/CustomDrawer/index';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DatePickerValue from '../common/DatePicker';
import dayjs from 'dayjs';
// import axios from 'axios';
import { useContext } from 'react';
import { GyapanContext } from '../../context/GyapanContext';
import { getGyapansByDate } from '../../services/ConstantServices'

export default function Header() {
  const { setGyapans } = useContext(GyapanContext);

  const drawerItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];
  const secondaryItems = ['All mail', 'Trash', 'Spam'];
  const auth = useSelector(state => state.authReducer.user);
  const [open, setOpen] = useState(false);
  // console.log("auth", auth);
  const [refresh, setRefresh] = useState(false);

  const [opendrawer, setOpendrawer] = React.useState(false);



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

  const [selectedDate, setSelectedDate] = React.useState(dayjs('2025-01-29'));
  // State for the date range
  const [fromDate, setFromDate] = React.useState(null); // Initially null
  const [toDate, setToDate] = React.useState(null); // Initially null
  const [data, setData] = React.useState([]);



  // Function to fetch data based on date range
  const fetchDataByDate = async () => {
    if (!fromDate || !toDate) {
      console.error('Please select both fromDate and toDate');
      return;
    }



    // Check if the dates are the same
    if (fromDate.isSame(toDate, 'day')) {
      console.error('fromDate and toDate must be different.');
      alert('Please select different dates for fromDate and toDate.');
      return;
    }

    try {
      
      const id = auth?.user?._id; // Example ID
      const token = auth?.token; // Replace with actual token
      const fromDate = fromDate.format('YYYY-MM-DD'); // Example: 7 days ago
      const toDate = toDate.format('YYYY-MM-DD'); // Today

      const response = await getGyapansByDate(id, token, fromDate, toDate);




      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // setData(data); // Set the fetched data

      // console.log('Fetched Data:', data);
      if (data?.data) {
        setGyapans(data.data);  // Set data if it's not empty
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  // useEffect to trigger fetchDataByDate when both dates are selected
  useEffect(() => {
    fetchDataByDate();
  }, [fromDate, toDate, refresh]); // Trigger only when fromDate or toDate changes


  return (
    <div className={styles.main} >
      {/* <Drawer drawerItems={drawerItems} secondaryItems={secondaryItems} logo={LogoComp}/> */}
      <div className={`d-flex flex-row align-items-center justify-content-between gap-1`} >
        <FontAwesomeIcon icon={faBars} className={` ${styles.menuIcon}`} fontSize={"2em"} onClick={() => setOpendrawer(true)} />
        <LogoComp />

        <h2 className={styles.page}>{getPageTitle()}</h2>

      </div>


      <TemporaryDrawer setOpen={setOpendrawer} open={opendrawer} />


      <div className='d-flex flex-row gap-2 align-items-center'>
        <div className={` gap-2 ${styles.datepicker} `}>
          <DatePickerValue value={fromDate} setValue={setFromDate} />
          <DatePickerValue value={toDate} setValue={setToDate} />

        </div>
        <div className='d-flex align-items-center gap-2'>


          <div className={`width-50 ${styles.header}`}>

            <CustomTypo variant={"h3"} fontSize={"1rem"} fontWeight={"500"}>

              {auth?.user?.name} {auth?.user?.tehsil}

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
      </div>
      <CreateGyapan
        open={open}
        setOpen={setOpen}
        refresh={() => setRefresh((prev) => !prev)}
      />
    </div>
  )
}
