import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import styles from './styles.module.css';

const COLORS = ["#FFBB28", "#00C49F", "#FF4D4F"];

const PatwariCard = ({ patwari, taskData }) => {

  
  return (
    <div className={`d-flex flex-column justify-content-between align-items-center ${styles.card}`}>
      <div className={`d-flex align-items-center  ${styles.topSection}`}>
        <div >
          <p className={styles.largeNumber}>{patwari?.totalGyapan}</p>
          <p className={`d-flex justify-content-center ${styles.lable}`}>Total</p> 
        </div>

        <PieChart width={150} height={150}>
          <Pie
            data={taskData}
            innerRadius={2}  
            paddingAngle={1} 
          >
            {taskData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{ backgroundColor: '#fff', borderRadius: '10px' }}
            labelStyle={{ fontWeight: 'bold' }}
            formatter={(value, name) => [`${name}: ${value}`]}
          />
        </PieChart>
      </div>

      <div className={`d-flex flex-row justify-content-between width-100`}>
        <div>
          <p className={styles.name}>{patwari.patwari.name}</p>
          <p className={styles.location}>Ratanpur</p>
        </div>
        <div>
          <p className={styles.lable}>Halka no.</p>
          <p className={styles.pendingTasks}>{patwari.patwari.halkaNumber}</p>
        </div>

      </div>
    </div>
  );
};

export default PatwariCard;
