import React, { useState } from 'react';
import styles from './styles.module.css';
import CustomTypo from '../../common/CustomTypo/CustomTypo';
import CustomButton from '../../common/CustomButton';
import CustomTable from '../../customTable/customTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddPatwariForm from '../addpatwarifForm';


export default function PatwariTable() {


    const [openAddForm, setOpenAddForm] = useState(false);

    const gridWidth = "0.5fr 1fr 1fr 1fr 1fr 1fr"
    const headData = ["No.", "Name", "Halka Number", "Phone Number", "Completed", "Pending"];
    const data = [
        {
            name: "Jagaat Singh",
            halkaNubmer : "12",
            phoneNumber : "1234567890",
            Completed : "10",
            Pending : "15",
        },
        {
            name: "Jagaat Singh",
            halkaNubmer : "12",
            phoneNumber : "1234567890",
            Completed : "10",
            Pending : "15",
        },
        {
            name: "Jagaat Singh",
            halkaNubmer : "12",
            phoneNumber : "1234567890",
            Completed : "10",
            Pending : "15",
        },
        {
            name: "Jagaat Singh",
            halkaNubmer : "12",
            phoneNumber : "1234567890",
            Completed : "10",
            Pending : "15",
        },];
    const keys = ["index", "name", "halkaNumber", "phoneNumber", "Completed", "Pending"]


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

            if (item === 'halkaNumber') {
                return (
                    <div key={i}>
                        <CustomTypo>{dataItem?.halkaNubmer}</CustomTypo>
                    </div>
                )
            }


            if (item === "deadline") {
                return (
                    <div>
                        <CustomButton text={"View PDF"} onClick={() => { }} variant='contained' fullWidth={true} />
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
            <CustomTable
                title={"Patwari"}
                gridWidth={gridWidth}
                headData={headData}
                mainHeading={"Table Heading"}
                rows={tableData}
                searchBar={{
                    name: "",
                    placeholder: "Search",
                    onChange: () => {}
                }}
             />

            <div className={styles.addBtn}>
                <CustomButton 
                    text={"Add Patwari"}
                    onClick={()=>setOpenAddForm(true)}
                    startIcon={<FontAwesomeIcon icon="fa-solid fa-plus" fontSize={"10px"} />}
                />   
            </div> 


            <AddPatwariForm 
                open = {openAddForm}
                setOpen={setOpenAddForm}
            />

            

        </div>
    );
};
