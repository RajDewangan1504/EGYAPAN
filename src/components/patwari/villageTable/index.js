import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import CustomTypo from '../../common/CustomTypo/CustomTypo';
import CustomButton from '../../common/CustomButton';
import CustomTable from '../../customTable/customTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddPatwariForm from '../addpatwarifForm';
import { useSelector } from 'react-redux';
import { getVillageById } from '../../../services/ConstantServices';
import AddVillageForm from '../addVillageForm';

export default function VillageTable() {


    const [data, setData] = useState([]);
    const auth = useSelector(state => state.authReducer.user);



    const [openAddForm, setOpenAddForm] = useState(false);
    const [openAddVillageForm, setOpenAddVillageForm] = useState(false);

    const [loading, setLoading] = useState(false);
    const gridWidth = "0.5fr 0.5fr 0.5fr"
    const headData = ["No.", "Name", "Halka Number"];

    const keys = ["index", "name", "halkaNumber"]


    const tableData = data.map((dataItem, index) =>
        keys.map((item, i) => {
            if (item === 'index') {
                return (
                    <div style={{ width: "100%" }}>{index + 1}</div>);
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
                    <div key={i} style={{ width: "100%" }}>
                        <CustomTypo>{dataItem?.halkaNumber}</CustomTypo>
                    </div>
                )
            }

            return dataItem[item] || ''

        })
    );



    const getData = async () => {
        setLoading(true);
        getVillageById(auth.user._id, auth.token).then(
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

            <div className={styles.addBtn1}>
                <CustomButton
                    text={"Add Village"}
                    onClick={() => setOpenAddVillageForm(true)}
                    startIcon={<FontAwesomeIcon icon="fa-solid fa-plus" fontSize={"10px"} />}
                />
            </div>

            <CustomTable
                title={"Villages"}
                gridWidth={gridWidth}
                loading={loading}
                headData={headData}
                mainHeading={"Table Heading"}
                rows={tableData}
                searchBar={{
                    name: "",
                    placeholder: "Search",
                    onChange: () => { }
                }}
            />



            <AddVillageForm
                open={openAddVillageForm}
                setOpen={setOpenAddVillageForm}
                refresh={getData}
            />
        </div>
    );
};
