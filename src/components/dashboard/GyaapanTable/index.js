import React from 'react';
import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import CustomTypo from '../../common/CustomTypo/CustomTypo';
import CustomButton from '../../common/CustomButton';
import CustomTable from '../../customTable/customTable';
import { getGyapans } from '../../../services/ConstantServices';
import Loading from '../../common/Loading'
import { convertISOtoDate } from '../../Utils';

const GyapanTable = () => {

    const auth = useSelector(state => state.authReducer.user);


    const [loading, setLoading] = useState(false);
    const gridWidth = "0.2fr 0.5fr 0.5fr 0.5fr 0.3fr 0.5fr 0.5fr 0.5fr"
    const headData = ["No.", "Patwari", "Details", "Date Sent", "Status", "Deadline", "Gyapan", "Prativedan"];
    const keys = ["index", "name", "details", "createdAt", "status", "deadline", "Gyapan", "Prativedan"]
    const [searchTerm, setSearchTerm] = useState('');
    const [gyapans, setGyapans] = useState([]);

    const loadGyapans = async () => {
        setLoading(true);
        try {
            const res = await getGyapans(auth.user._id);
            setGyapans(res.data);
            console.log("gyapans", res.data);
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
        if (pdfUrl) {
            window.open(pdfUrl, '_blank');
        } else {
            console.error('No PDF URL provided');
        }
    };

    const filteredGyapans = gyapans.filter(dataItem => {
        const patwariName = dataItem?.patwari.name?.toLowerCase() || '';
        const villageName = dataItem?.village.name?.toLowerCase() || '';
        const gyapanId = dataItem?.gyapanId?.toString() || '';
        const caseId = dataItem?.caseId?.toString() || '';

        return (
            patwariName.includes(searchTerm.toLowerCase()) ||
            villageName.includes(searchTerm.toLowerCase()) ||
            gyapanId.includes(searchTerm) ||
            caseId.includes(searchTerm)
        );
    });


    const currentDate = new Date();
    // console.log("current date", currentDate);
    let isDeadlineMissed = "";

    const tableData = filteredGyapans.map((dataItem, index) =>

        keys.map((item, i) => {
            isDeadlineMissed = new Date(dataItem.deadline) < currentDate && !dataItem.prativedan;
            if (item === 'index') {

                // console.log("isdeadline and index", isDeadlineMissed, index + 1);
                return (<div
                    key={i}
                    style={{
                        width: '100% ',
                        height: '50px',
                        borderLeft: isDeadlineMissed ? '5px solid red' : 'none', // Apply left border if deadline missed
                        paddingLeft: '10px', // Add some padding to separate from text
                        alignItems: 'center',
                        display: 'flex',
                        borderRadius: '5px'
                    }}
                >
                    {index + 1}
                </div>);
            }
            if (item === 'name') {
                return (
                    <div key={i} style={{ width: "100%" }}>
                        <CustomTypo>{dataItem?.patwari.name}</CustomTypo>
                        <CustomTypo sx={{ color: "#0008", fontSize: '14px' }}>(Vill. {dataItem?.village.name})</CustomTypo>
                    </div>
                )
            }
            if (item === 'details') {
                return (
                    <div key={i} style={{ width: "100%" }}>
                        <CustomTypo>Gyapan Id : {dataItem?.gyapanId}
                        </CustomTypo>
                        <CustomTypo >Case Id : {dataItem?.caseId}</CustomTypo>
                    </div>
                )
            }
            if (item === "Gyapan") {
                return (
                    <div style={{ width: "100%" }}>
                        <CustomButton text={"View PDF"} variant='contained'
                            onClick={() => downloadPDF(dataItem?.attachment)} />
                    </div>
                )
            }
            if (item === "Prativedan") {
                return (
                    <div style={{ width: "100%" }}>
                        {dataItem?.prativedanUrl ? (
                            <CustomButton
                                text="View PDF"
                                variant="contained"
                                onClick={() => downloadPDF(dataItem?.prativedanUrl)}
                            />
                        ) : (
                            "Not Available"
                        )}
                    </div>
                )
            }
            if (item === "createdAt") {
                return (
                    <div style={{ width: "100%" }}>
                        {convertISOtoDate(dataItem.createdAt)}
                    </div>
                );
            }
            if (item === "deadline") {
                return (
                    <div style={{ width: "100%" }}>
                        {convertISOtoDate(dataItem.deadline)}
                    </div>
                );
            }
            if (item === "status") {
                return (
                    <div style={{ width: "100%", textTransform: 'capitalize' }}>
                        {dataItem[item]}
                    </div>
                );
            }
            else {
                return dataItem[item] || ''
            }
        })

    );
    console.log("data items ", filteredGyapans);

    return (
        <div className="mb-2">
            <CustomTable
                title={"All Gyaapan"}
                gridWidth={gridWidth}
                headData={headData}
                loading={loading}
                mainHeading={"Table Heading"}
                rows={tableData}
                searchBar={{
                    name: "",
                    placeholder: "Search",
                    onChange: (e) => {
                        const text = e.target.value;
                        setSearchTerm(text);
                    }

                }}
            />
        </div>
    );
};

export default GyapanTable;