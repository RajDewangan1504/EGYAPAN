import React from 'react';
import styles from './styles.module.css';
import DashboardHeader from './header'
import StatsOverview from './overview';
import TaskTable from './table';
import '../../global.css'
import { Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <div className={`d-flex flex-column height-100vh width-100 ${styles.dashboardContainer}`}>
    
      <DashboardHeader />
      <StatsOverview />
      <TaskTable />
    </div>
  );
};

export default Dashboard;

