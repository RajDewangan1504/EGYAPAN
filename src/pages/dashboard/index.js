import React from 'react';
import styles from './styles.module.css';
import GyapanTable from '../../components/dashboard/GyaapanTable';
import '../../global.css';
import PatwariCard from '../../components/dashboard/PatwariCard';
import PatwariSection from '../../components/dashboard/PatwariSection';
import Overview from '../../components/dashboard/Overview';
import { useState } from 'react';

const Dashboard = () => {

  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleStatClick = (filter) => {
      setSelectedFilter(filter);
  };

  

  return (
    <div className={`d-flex flex-column width-100 ${styles.dashboardContainer} gap-2`}>
    <Overview onStatClick={handleStatClick} />
    <GyapanTable filter={selectedFilter} />
</div>
  );
};

export default Dashboard;
