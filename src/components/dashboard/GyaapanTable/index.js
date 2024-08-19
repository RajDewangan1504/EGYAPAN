import React from 'react';
import styles from './styles.module.css';
import CustomTypo from '../../common/CustomTypo/CustomTypo';
import CustomButton from '../../common/CustomButton';
import CustomTable from '../../customTable/customTable';


const TaskTable = () => {


    const gridWidth = "0.2fr 0.8fr 1fr 0.5fr 1fr"
    const headData = ["No.", "Name", "GyaapanId", "Case ID", "Status"];
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
    const keys = ["index", "name", "gyaapaanID", "caseID", "deadline"]


    const tableData = data.map((dataItem, index) =>
        keys.map((item, i) => {
            if (item === 'index') {
                return (index + 1);
            }
            if (item === 'name') {
                return (
                    <div key={  i}>
                        <CustomTypo>{dataItem?.name}</CustomTypo>
                    </div>
                )
            }
            if(item==="deadline"){
                return(
                <div>
                    <CustomButton text={"View PDF"} onClick={()=>{}} variant='contained' fullWidth = {true}/>
                 </div>
                )
            }
            else {
                return dataItem[item] || ''
            }
        })
    );


    return (
        <div>
            <CustomTable
                title = {"All Gyaapan"}
                gridWidth={gridWidth}
                headData={headData}
                mainHeading={"Table Heading"}
                rows={tableData}
                searchBar={{
                    name : "",
                    placeholder : "Search",
                    onChange : ()=>{}

                }}
            />            
        </div>
    );
};

export default TaskTable;