import React from 'react';
import styles from './styles.module.css';
import GyapanTable from '../../components/dashboard/GyaapanTable';
import '../../global.css';
import PatwariCard from '../../components/dashboard/PatwariCard';
import PatwariSection from '../../components/dashboard/PatwariSection';

const Dashboard = () => {

  

  return (
    <div className={`d-flex flex-column width-100 ${styles.dashboardContainer} gap-2`}>
      <PatwariSection />
      <GyapanTable />
    </div>
  );
};

export default Dashboard;
