
import styles from './styles.module.css';
import StatsOverview from './overview';
import TaskTable from '../../components/dashboard/GyaapanTable';
import '../../global.css'



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

