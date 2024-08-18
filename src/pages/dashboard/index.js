import React from 'react'
import AnalyticsCard from '../../components/dashboard/analyticsCard'
import styles from './styles.module.css'
import CustomTable from '../../components/customTable/customTable'
import CustomTypo from '../../components/common/CustomTypo/CustomTypo'
export default function Dashboard() {



  const gridWidth = "1fr 1fr 1fr 1fr 1fr"
  const headData = ["SrNo." , "Name" , "GyaapanId", "Case ID" , "Status"];
  const data = [
    {
      name: "Jagaat Singh",
      gyaapaanID: "789546",
      caseID: "123456",
      deadline: "12-06-2024",
      whatsapp: "9301982112",
      dateSent: "12-06-2024",
      receivedOn: "12-06-2024"
    },
    {
      name: "Jagaat Singh",
      gyaapaanID: "789546",
      caseID: "123456",
      deadline: "12-06-2024",
      whatsapp: "9301982112",
      dateSent: "12-06-2024",
      receivedOn: "12-06-2024"
    },
    {
      name: "Jagaat Singh",
      gyaapaanID: "789546",
      caseID: "123456",
      deadline: "12-06-2024",
      whatsapp: "9301982112",
      dateSent: "12-06-2024",
      receivedOn: "12-06-2024"
    },
    {
      name: "Jagaat Singh",
      gyaapaanID: "789546",
      caseID: "123456",
      deadline: "12-06-2024",
      whatsapp: "9301982112",
      dateSent: "12-06-2024",
      receivedOn: "12-06-2024"
    },
    {
      name: "Jagaat Singh",
      gyaapaanID: "789546",
      caseID: "123456",
      deadline: "12-06-2024",
      whatsapp: "9301982112",
      dateSent: "12-06-2024",
      receivedOn: "12-06-2024"
    }];
  const keys = ["index" , "name" , "gyaapaanID" , "caseID" , "deadline"]  
  const tableData = data.map((dataItem, index) =>
    keys.map((item, i) => {
      if (item === 'index') {
        return (index + 1);
      }
      if (item === 'name') {
        return (
          <div key={i}>
            <CustomTypo>{dataItem?.name}</CustomTypo>
          </div>
        )
      }
      else {
        return dataItem[item] || ''
      }
    })
  );

  return (
    <div className={styles.main}>
      <div className={styles.cards}>
        <AnalyticsCard title={"Total"} value={"20"}></AnalyticsCard>
        <AnalyticsCard title={"Pending"} value={"20"}></AnalyticsCard>
        <AnalyticsCard title={"Completed"} value={"20"}></AnalyticsCard>
        <AnalyticsCard title={"Waiting for Gyaapan"} value={"20"}></AnalyticsCard>
      </div>

      <div>
        <CustomTable 
          gridWidth={gridWidth}
          headData={headData}
          mainHeading={"Table Heading"}
          rows={tableData}

        />
      </div>

    </div>
  )
}
