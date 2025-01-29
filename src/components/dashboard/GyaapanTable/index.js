import React, { useState, useEffect,useContext, } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import CustomTypo from '../../common/CustomTypo/CustomTypo';
import CustomButton from '../../common/CustomButton';
import CustomTable from '../../customTable/customTable';
import { getGyapans } from '../../../services/ConstantServices';
import Loading from '../../common/Loading';
import { GyapanContext } from '../../../context/GyapanContext';
import { convertISOtoDate } from '../../Utils';
// import { RefreshContext } from "../../../context/GyapanContext";

const GyapanTable = ({ filter }) => {
    const auth = useSelector(state => state.authReducer.user);
    const [loading, setLoading] = useState(false);
    // const [gyapans, setGyapans] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    // const { refresh } = useContext(RefreshContext);;

    const { gyapans, setGyapans} = useContext(GyapanContext);
    // console.log("gyapans",gyapans);

    const gridWidth = "0.2fr 0.5fr 0.5fr 0.5fr 0.3fr 0.5fr 0.5fr 0.5fr";
    const headData = ["No.", "Patwari", "Details", "Date Sent", "Status", "Deadline", "Gyapan", "Prativedan"];
    const keys = ["index", "name", "details", "createdAt", "status", "deadline", "Gyapan", "Prativedan"];

    const loadGyapans = async () => {
        setLoading(true);
        try {
            const res = await getGyapans(auth.user._id);
            setGyapans(res.data);
        } catch (error) {
            console.error('Failed to load Gyapans:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (auth?.user?._id) {
            loadGyapans();
        }
    }, [auth.user._id]);

    // Combined filtering logic
    const filteredGyapans = gyapans.filter(dataItem => {
        const currentDate = new Date();
        const deadlineDate = new Date(dataItem.deadline);
        const patwariName = dataItem?.patwari.name?.toLowerCase() || '';
        const villageName = dataItem?.village.name?.toLowerCase() || '';
        const gyapanId = dataItem?.gyapanId?.toString() || '';
        const caseId = dataItem?.caseId?.toString() || '';

        // Check if the search term matches patwari name, village name, gyapan ID, or case ID
        const searchMatch = (
            patwariName.includes(searchTerm.toLowerCase()) ||
            villageName.includes(searchTerm.toLowerCase()) ||
            gyapanId.includes(searchTerm) ||
            caseId.includes(searchTerm)
        );

        // Apply filter based on the 'filter' prop
        if (filter === 'received') {
            return dataItem.prativedanUrl && searchMatch;
        }
        if (filter === 'pending') {
            return dataItem.status?.toLowerCase() === 'pending' && searchMatch;
        }
        if (filter === 'deadlineCrossed') {
            return deadlineDate < currentDate && dataItem.status?.toLowerCase() === 'pending' && searchMatch;
        }

        return searchMatch; // Default case: no filter, only apply search
    });

    // const downloadPDF = (pdfUrl) => {
    //     if (pdfUrl) {
    //         window.open(pdfUrl, '_blank');
    //     } else {
    //         console.error('No PDF URL provided');
    //     }
    // };
    const downloadPDF = (url) => {
        if (!url) {
            console.error('No URL provided');
            return;
        }
    
        const isImage = /\.(jpg|jpeg|png|gif)$/i.test(url);
        const isPDF = /\.pdf$/i.test(url);
    
        if (isImage) {
            // Open image in a new tab
            window.open(url, '_blank');
        } else if (isPDF) {
            // Open PDF in a new tab
            window.open(url, '_blank');
        } else {
            console.error('Unsupported file type:', url);
        }
    };

    const tableData = filteredGyapans.map((dataItem, index) =>
        keys.map((item, i) => {
            const isDeadlineMissed = new Date(dataItem.deadline) < new Date() && dataItem.status.toLowerCase() === "pending";
            const isSubmittedOnTime = dataItem.status.toLowerCase() === "submitted";

            let borderColor = 'none';
            if (isDeadlineMissed) borderColor = '5px solid red';
            if (isSubmittedOnTime) borderColor = '5px solid green';

            if (item === 'index') {
                return (
                    <div
                        key={i}
                        style={{
                            width: '100%',
                            height: '50px',
                            borderLeft: borderColor,
                            paddingLeft: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '5px'
                        }}
                    >
                        {index + 1}
                    </div>
                );
            }
            if (item === 'name') {
                return (
                    <div key={i} style={{ width: "100%" }}>
                        <CustomTypo>{dataItem?.patwari.name}</CustomTypo>
                        <CustomTypo sx={{ color: "#0008", fontSize: '14px' }}>(Vill. {dataItem?.village.name})</CustomTypo>
                    </div>
                );
            }
            if (item === 'details') {
                return (
                    <div key={i} style={{ width: "100%" }}>
                        <CustomTypo>Gyapan Id : {dataItem?.gyapanId}</CustomTypo>
                        <CustomTypo>Case Id : {dataItem?.caseId}</CustomTypo>
                    </div>
                );
            }
            if (item === "Gyapan") {
                return (
                    <div style={{ width: "100%" }}>
                        <CustomButton text="View PDF" variant="contained" onClick={() => downloadPDF(dataItem?.attachment)} />
                    </div>
                );
            }
            if (item === "Prativedan") {
                return (
                    <div style={{ width: "100%" }}>
                        {dataItem?.prativedanUrl ? (
                            <CustomButton text="View PDF" variant="contained" onClick={() => downloadPDF(dataItem?.prativedanUrl)} />
                        ) : (
                            "Not Available"
                        )}
                    </div>
                );
            }
            if (item === "createdAt") {
                return <div style={{ width: "100%" }}>{convertISOtoDate(dataItem.createdAt)}</div>;
            }
            if (item === "deadline") {
                return <div style={{ width: "100%" }}>{convertISOtoDate(dataItem.deadline)}</div>;
            }
            if (item === "status") {
                return <div style={{ width: "100%", textTransform: 'capitalize' }}>{dataItem[item]}</div>;
            }
            return dataItem[item] || '';
        })
    );

    return (
        <div className="mb-2">
            <CustomTable
                title="All Gyapan"
                gridWidth={gridWidth}
                headData={headData}
                loading={loading}
                mainHeading="Table Heading"
                rows={tableData}
                searchBar={{
                    name: "",
                    placeholder: "Search",
                    onChange: (e) => setSearchTerm(e.target.value),
                }}
            />
        </div>
    );
};

export default GyapanTable;
