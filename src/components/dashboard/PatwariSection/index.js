import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import PatwariCard from '../PatwariCard';
import { allPatwari } from '../../../services/ConstantServices';
import { useSelector } from 'react-redux';
import Shimmer from '../../shimmer';
import { patwariAnalytics } from '../../../services/PatwariServices';


export default function PatwariSection() {


    // const patwariList = [
    //     {
    //         name: "Abhishek Sahu",
    //         location: "Ratanpur",
    //         completedTasks: 206,
    //         pendingTasks: 19,
    //         taskData: [
    //             { name: "Pending", value: 19, color: "#FF4D4F" },
    //             { name: "Completed", value: 106, color: "#00C49F" },
    //             { name: "After Deadline", value: 108, color: "#FFBB28" }
    //         ]
    //     },
    //     {
    //         name: "Rajesh Kumar",
    //         location: "Bilaspur",
    //         completedTasks: 150,
    //         pendingTasks: 25,
    //         taskData: [
    //             { name: "Pending", value: 25, color: "#FF4D4F" },
    //             { name: "Completed", value: 100, color: "#00C49F" },
    //             { name: "After Deadline", value: 90, color: "#FFBB28" }
    //         ]
    //     },
    //     {
    //         name: "Sunita Patel",
    //         location: "Korba",
    //         completedTasks: 180,
    //         pendingTasks: 12,
    //         taskData: [
    //             { name: "Pending", value: 122, color: "#FF4D4F" },
    //             { name: "Completed", value: 102, color: "#00C49F" },
    //             { name: "After Deadline", value: 60, color: "#FFBB28" }
    //         ]
    //     },
    //     {
    //         name: "Vijay Singh",
    //         location: "Raipur",
    //         completedTasks: 220,
    //         pendingTasks: 10,
    //         taskData: [
    //             { name: "Pending", value: 10, color: "#FF4D4F" },
    //             { name: "Completed", value: 220, color: "#00C49F" },
    //             { name: "After Deadline", value: 20, color: "#FFBB28" }
    //         ]
    //     },
    //     {
    //         name: "Deepak Singh",
    //         location: "Raipur",
    //         completedTasks: 220,
    //         pendingTasks: 10,
    //         taskData: [
    //             { name: "Pending", value: 40, color: "#FF4D4F" },
    //             { name: "Completed", value: 150, color: "#00C49F" },
    //             { name: "After Deadline", value: 70, color: "#FFBB28" }
    //         ]
    //     }, {
    //         name: "Gaurav Ansari",
    //         location: "Raipur",
    //         completedTasks: 220,
    //         pendingTasks: 10,
    //         taskData: [
    //             { name: "Pending", value: 80, color: "#FF4D4F" },
    //             { name: "Completed", value: 40, color: "#00C49F" },
    //             { name: "After Deadline", value: 120, color: "#FFBB28" }
    //         ]
    //     }
    // ];

    const [loading, setLoading] = useState(false);
    const auth = useSelector(state => state.authReducer.user);
    const [data, setData] = useState();
    const getData = async () => {
        setLoading(true);
        const res = await patwariAnalytics(auth?.user._id, auth?.token);
        if (res.success) {
            console.log(res.data)
            setData(res.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            {loading ?
                <div className={`${styles.cardsContainer}`}>
                    {([1, 2, 3]).map((item, index) => {
                        return (
                            <div className={styles.cardWrapper} >
                                <Shimmer instance={1} height={"350px"} />
                            </div>
                        )
                    })}
                </div>
                :
                <div className={`${styles.cardsContainer}`}>
                    {data && data.map((patwari, index) => (
                        <PatwariCard key={index} patwari={patwari} taskData={[
                            { name: "Pending", value: patwari?.pending, color: "#FF4D4F" },  // from 'pending'
                            { name: "Completed", value: patwari?.completed, color: "#00C49F" },  // from 'completed'
                            { name: "After Deadline", value: patwari?.afterDeadline, color: "#FFBB28" }  // from 'afterDeadline'
                        ]} />
                    ))}
                </div>
            }

        </div>
    )
}
