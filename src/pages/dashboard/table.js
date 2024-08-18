import React from 'react';
import styles from './styles.module.css';
import { useState } from 'react';


const TaskTable = () => {

    const [activeTab, setActiveTab] = useState('Pending');

   // Sample data repeated 8 times
  const pendingData = Array(8).fill({
    name: 'Jagaat Singh', 
    gyapaanId: '789546', 
    caseId: '123456', 
    deadline: '12-06-2024', 
    whatsapp: '9301982112', 
    dateSent: '12-06-2024', 
    receivedOn: '12-06-2024'
  });

  const completedData = Array(8).fill({
    name: 'Rajeev Kumar', 
    gyapaanId: '789547', 
    caseId: '123457', 
    deadline: '10-06-2024', 
    whatsapp: '9301982113', 
    dateSent: '10-06-2024', 
    receivedOn: '11-06-2024'
  });

    const dataToRender = activeTab === 'Pending' ? pendingData : completedData;

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };


    return (
        <div className={`flex-1 p-1 ${styles.tableContainer}`}>
            <div className={`d-flex mb-1 ${styles.tableTabs}`}>
                <button
                    className={activeTab === 'Pending' ? styles.activeTab : ''}
                    onClick={() => handleTabClick('Pending')}
                >
                    Pending
                </button>
                <button
                    className={activeTab === 'Completed' ? styles.activeTab : ''}
                    onClick={() => handleTabClick('Completed')}
                >
                    Completed
                </button>
            </div>
            <table className={`width-100 ${styles.table}`}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gyapaan ID</th>
                        <th>Case ID</th>
                        <th>Deadline</th>
                        <th>WhatsApp</th>
                        <th>Date Sent</th>
                        <th>Received on</th>
                    </tr>
                </thead>
                <tbody>
                    {dataToRender.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.gyapaanId}</td>
                            <td>{item.caseId}</td>
                            <td>{item.deadline}</td>
                            <td>{item.whatsapp}</td>
                            <td>{item.dateSent}</td>
                            <td>{item.receivedOn}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;