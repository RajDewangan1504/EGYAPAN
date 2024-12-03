import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import CustomTypo from '../../common/CustomTypo/CustomTypo';
import CustomButton from '../../common/CustomButton';
import CustomTable from '../../customTable/customTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddPatwariForm from '../addpatwarifForm';
import { getAllPatwari } from '../../../services/PatwariServices';
import { useSelector } from 'react-redux';
import { getVillagesByHalka, getGyapanTypes, allPatwari } from '../../../services/ConstantServices';
import Loading from '../../common/Loading';
import { set } from 'date-fns';
import AddVillage from '../addVillageForm';
import AddVillageForm from '../addVillageForm';

export default function PatwariTable() {


    const [data, setData] = useState([]);
    const auth = useSelector(state => state.authReducer.user);



    const [openAddForm, setOpenAddForm] = useState(false);
    const [openAddVillageForm, setOpenAddVillageForm] = useState(false);

    const [loading, setLoading] = useState(false);
    const gridWidth = "0.5fr 1fr 1fr 1fr"
    const headData = ["No.", "Name", "Halka Number", "Phone Number"];

    const keys = ["index", "name", "halkaNumber", "phoneNumber"]


    const tableData = data.map((dataItem, index) =>
        
        keys.map((item, i) => {
            // console.log("halkanumber ",dataItem.halkaNumber);
            if (item === 'index') {
                return (<div style ={{width : "100%"}} className='ml-1'>{index + 1}</div>);
            }
            if (item === 'name') {
                return (
                    <div key={i} style={{ width: "100%" }}>
                        <CustomTypo>{dataItem?.name}</CustomTypo>
                    </div>
                )
            }

            if (item === 'halkaNumber') {
                return (
                    <div key={i} style={{ width: "100%" }} className='ml-2'>
                        <CustomTypo>{Array.isArray(dataItem?.halkaNumber) ? dataItem.halkaNumber.join(', ') : dataItem.halkaNumber}</CustomTypo>
                    </div>
                )
            }
            if (item === 'phoneNumber') {
                return (
                    <div key={i} style={{ width: "100%" }} className='ml-2'>
                        <CustomTypo>{dataItem?.phoneNumber}</CustomTypo>
                    </div>
                )
            }


           
            return dataItem[item] || ''
            
        })
    );



    const getData = async () => {
        setLoading(true);
        allPatwari(auth.user._id, auth.token).then(
            res => {
                if (res.success) {
                    setData(res.data);
                    console.log(res);
                    setLoading(false);
                }
                else {
                    console.error('Failed to retrieve patwari list');
                    setLoading(false);
                }
            }
        )
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className={styles.main}>
            
            <CustomTable
                title={"Patwari"}
                gridWidth={gridWidth}
                loading = {loading}
                headData={headData}
                mainHeading={"Table Heading"}
                rows={tableData}
                searchBar={{
                    name: "",
                    placeholder: "Search",
                    onChange: () => { }
                }}
            />

            <div className={styles.addBtn}>
                <CustomButton
                    text={"Add Patwari"}
                    onClick={() => setOpenAddForm(true)}
                    startIcon={<FontAwesomeIcon icon="fa-solid fa-plus" fontSize={"10px"} />}
                />               
            </div>


            <AddPatwariForm
                open={openAddForm}
                setOpen={setOpenAddForm}
                refresh={getData}
            />

            
        </div>
    );
};
