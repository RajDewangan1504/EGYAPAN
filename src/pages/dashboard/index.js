import React from 'react';
import styles from './styles.module.css';
import TaskTable from '../../components/dashboard/GyaapanTable';
import '../../global.css';
import PatwariCard from '../../components/dashboard/PatwariCard';

const Dashboard = () => {
  
  const patwariList = [
    {
      name: "Abhishek Sahu",
      location: "Ratanpur",
      completedTasks: 206,
      pendingTasks: 19,
      taskData: [
        { name: "Pending", value: 19, color: "#FF4D4F" }, 
        { name: "Completed", value: 106, color: "#00C49F" }, 
        { name: "After Deadline", value: 108, color: "#FFBB28" }
      ]
    },
    {
      name: "Rajesh Kumar",
      location: "Bilaspur",
      completedTasks: 150,
      pendingTasks: 25,
      taskData: [
        { name: "Pending", value: 25, color: "#FF4D4F" }, 
        { name: "Completed", value: 100, color: "#00C49F" }, 
        { name: "After Deadline", value: 90, color: "#FFBB28" }
      ]
    },
    {
      name: "Sunita Patel",
      location: "Korba",
      completedTasks: 180,
      pendingTasks: 12,
      taskData: [
        { name: "Pending", value: 122, color: "#FF4D4F" }, 
        { name: "Completed", value: 102, color: "#00C49F" }, 
        { name: "After Deadline", value: 60, color: "#FFBB28" }
      ]
    },
    {
      name: "Vijay Singh",
      location: "Raipur",
      completedTasks: 220,
      pendingTasks: 10,
      taskData: [
        { name: "Pending", value: 10, color: "#FF4D4F" }, 
        { name: "Completed", value: 220, color: "#00C49F" }, 
        { name: "After Deadline", value: 20, color: "#FFBB28" }
      ]
    },
    {
      name: "Deepak Singh",
      location: "Raipur",
      completedTasks: 220,
      pendingTasks: 10,
      taskData: [
        { name: "Pending", value: 40, color: "#FF4D4F" }, 
        { name: "Completed", value: 150, color: "#00C49F" }, 
        { name: "After Deadline", value: 70, color: "#FFBB28" }
      ]
    },{
      name: "Gaurav Ansari",
      location: "Raipur",
      completedTasks: 220,
      pendingTasks: 10,
      taskData: [
        { name: "Pending", value: 80, color: "#FF4D4F" }, 
        { name: "Completed", value: 40, color: "#00C49F" }, 
        { name: "After Deadline", value: 120, color: "#FFBB28" }
      ]
    }
  ];

  return (
    <div className={`d-flex flex-column width-100 ${styles.dashboardContainer}`}>
      <div className={`${styles.cardsContainer}`}>
        {patwariList.map((patwari, index) => (
          <PatwariCard key={index} patwari={patwari} taskData={patwari.taskData} />
        ))}
      </div>
      
     
      <TaskTable />
    </div>
  );
};

export default Dashboard;
