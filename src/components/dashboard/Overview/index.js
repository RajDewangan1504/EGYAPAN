import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { getGyapans } from '../../../services/ConstantServices';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { GyapanContext } from '../../../context/GyapanContext';

const GyapanStats = ({ onStatClick }) => {
    const auth = useSelector(state => state.authReducer.user);
    const { gyapans, setGyapans} = useContext(GyapanContext);


    // const [gyapans, setGyapans] = useState([]);  // Store fetched gyapans
    const [selectedStat, setSelectedStat] = useState(null); // Track selected stat box

    const loadGyapans = async () => {
        try {
            const res = await getGyapans(auth?.user?._id);
            setGyapans(res.data);
            // console.log(res);
        } catch (error) {
            console.error('Failed to load Gyapans:', error);
        }
    };

    useEffect(() => {
        if (auth?.user?._id) {
            loadGyapans();
        }
    }, [auth.user._id]);

    // Calculate the total number of gyapans
    const totalGyapansSent = gyapans.length;
    const totalPrativedanReceived = gyapans.filter(gyapan => gyapan.prativedanUrl).length;
    const totalPendingGyapans = gyapans.filter(gyapan => gyapan.status?.toLowerCase() === 'pending').length;

    const currentDate = new Date();
    const totalDeadlineDueGyapans = gyapans.filter(gyapan => {
        const deadlineDate = new Date(gyapan.deadline);
        return deadlineDate < currentDate && gyapan.status?.toLowerCase() === 'pending';
    }).length;

    const stats = [
        { title: 'Total Gyapan Sent', value: totalGyapansSent.toString(), filter: 'all' },
        { title: 'Total Prativedan Received', value: totalPrativedanReceived.toString(), filter: 'received' },
        { title: 'Pending Gyapans', value: totalPendingGyapans.toString(), filter: 'pending' },
        { title: 'Deadline Crossed', value: totalDeadlineDueGyapans.toString(), filter: 'deadlineCrossed' }
    ];

    const handleStatClick = (filter) => {
        setSelectedStat(filter);  // Set the selected stat filter
        onStatClick(filter);  // Trigger the parent function
    };

    return (
        <div className={styles.gridContainer}>
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`${styles.card} ${selectedStat === stat.filter ? styles.selectedCard : ''}`}  // Add selectedCard class if clicked
                    onClick={() => handleStatClick(stat.filter)}
                    style={{ cursor: 'pointer' }}
                >
                    <h2 className={styles.title}>{stat.title}</h2>
                    <p className={styles.value}>{stat.value}</p>
                </div>
            ))}
        </div>
    );
};

export default GyapanStats;
