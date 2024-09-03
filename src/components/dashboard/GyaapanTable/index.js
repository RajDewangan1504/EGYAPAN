import React from 'react';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import CustomTypo from '../../common/CustomTypo/CustomTypo';
import CustomButton from '../../common/CustomButton';
import CustomTable from '../../customTable/customTable';
import { getGyapans } from '../../../services/ConstantServices';
import Loading from '../../common/Loading'

const TaskTable = () => {

    const auth = useSelector(state => state.authReducer.user);

   
    const [loading, setLoading] = useState(false);
    const gridWidth = "0.2fr 0.5fr .5fr 0.5fr .5fr .5fr"
    const headData = ["No.", "Name","Village", "GyaapanId", "Case ID", "Status"];
   
    const keys = ["index", "name","village", "gyapanId", "caseId", "deadline"]


    const [gyapans, setGyapans] = useState([]);
    

    const loadGyapans = async () => {
        setLoading(true);
        try {
            const data = await getGyapans(auth.user._id);
            setGyapans(data.data);
            console.log("gyapans",data.data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to load Gyapans:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        loadGyapans();
    }, [auth.user._id]);

    const downloadPDF = (pdfUrl) => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.setAttribute('download', 'Gyapan.pdf'); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };



    const tableData = gyapans.map((dataItem, index) =>
        keys.map((item, i) => {
            if (item === 'index') {
                return (index + 1);
            }
            if (item === 'name') {
                return (
                    <div key={  i}>
                        <CustomTypo>{dataItem?.patwari.name}</CustomTypo>
                    </div>
                )
            }
            if (item === 'village') {
                return (
                    <div key={  i}>
                        <CustomTypo>{dataItem?.village.name}</CustomTypo>
                    </div>
                )
            }
            if(item==="deadline"){
                return(
                <div>
                    <CustomButton text={"View PDF"}  variant='contained' fullWidth = {true}
                     onClick={() => downloadPDF(dataItem?.attachment)}/>
                 </div>
                )
            }
            else {
                return dataItem[item] || ''
            }
        })
    );


    return (
        <div >
         {loading &&
            <Loading />}
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