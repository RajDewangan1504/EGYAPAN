import React, { useState } from 'react';
import styles from './styles.module.css';
import StatsOverview from './overview';
import TaskTable from '../../components/dashboard/GyaapanTable';
import '../../global.css'
import CustomButton from '../../components/common/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomPopup from '../../components/common/CustomPopup';
import CustomTypo from '../../components/common/CustomTypo/CustomTypo';
import CreateGyapan from '../../components/dashboard/Creategyapan';



const Dashboard = () => {




  return (
    <div className={`d-flex flex-column width-100 ${styles.dashboardContainer}`}>
      <div className='d-flex justify-content-between mt-1'>
        <StatsOverview />
       
       
      </div>
      <TaskTable />
    </div>
  );
};

export default Dashboard;

