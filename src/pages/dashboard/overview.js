import React from 'react';
import styles from './styles.module.css';
import '../../global.css'


const StatsOverview = () => {
    return (
        <div className={`p-1 d-flex justify-content-around ${styles.statsOverview}`}>
            <div className={`text-center flex-1 ${styles.statCard}`}>
                <div className={styles.statTitle}>Total</div>
                <div className={styles.statValue}>156</div>
            </div>
            <div className={`text-center flex-1 ${styles.statCard}`}>
                <div className={styles.statTitle}>Pending</div>
                <div className={styles.statValue}>54</div>
            </div>
            <div className={`text-center flex-1 ${styles.statCard}`}>
                <div className={styles.statTitle}>Completed</div>
                <div className={styles.statValue}>58</div>
            </div>
            <div className={`text-center flex-1 ${styles.statCard}`}>
                <div className={styles.statTitle}>Waiting for Gyapaan</div>
                <div className={styles.statValue}>44</div>
            </div>
        </div>
    );
};

export default StatsOverview;