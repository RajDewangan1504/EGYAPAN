import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import PatwariCard from '../PatwariCard';
import { allPatwari } from '../../../services/ConstantServices';
import { useSelector } from 'react-redux';


export default function PatwariSection() {


    const patwariList = [
        {
            name: "Abhishek Sahu",
            location: "Ratanpur",
            completedTasks: 206,
            pendingTasks: 19,
            taskData: [
                { name: "Pending", value: 19, color: "#FF4D4F" },
                { name: "Completed", value: 106, color: "#00C49F" },
                { name: "After Deadline", value: 108, color: "#FFBB28" }
            ]
        },
        {
            name: "Rajesh Kumar",
            location: "Bilaspur",
            completedTasks: 150,
            pendingTasks: 25,
            taskData: [
                { name: "Pending", value: 25, color: "#FF4D4F" },
                { name: "Completed", value: 100, color: "#00C49F" },
                { name: "After Deadline", value: 90, color: "#FFBB28" }
            ]
        },
        {
            name: "Sunita Patel",
            location: "Korba",
            completedTasks: 180,
            pendingTasks: 12,
            taskData: [
                { name: "Pending", value: 122, color: "#FF4D4F" },
                { name: "Completed", value: 102, color: "#00C49F" },
                { name: "After Deadline", value: 60, color: "#FFBB28" }
            ]
        },
        {
            name: "Vijay Singh",
            location: "Raipur",
            completedTasks: 220,
            pendingTasks: 10,
            taskData: [
                { name: "Pending", value: 10, color: "#FF4D4F" },
                { name: "Completed", value: 220, color: "#00C49F" },
                { name: "After Deadline", value: 20, color: "#FFBB28" }
            ]
        },
        {
            name: "Deepak Singh",
            location: "Raipur",
            completedTasks: 220,
            pendingTasks: 10,
            taskData: [
                { name: "Pending", value: 40, color: "#FF4D4F" },
                { name: "Completed", value: 150, color: "#00C49F" },
                { name: "After Deadline", value: 70, color: "#FFBB28" }
            ]
        }, {
            name: "Gaurav Ansari",
            location: "Raipur",
            completedTasks: 220,
            pendingTasks: 10,
            taskData: [
                { name: "Pending", value: 80, color: "#FF4D4F" },
                { name: "Completed", value: 40, color: "#00C49F" },
                { name: "After Deadline", value: 120, color: "#FFBB28" }
            ]
        }
    ];

    const auth = useSelector(state => state.authReducer.user);
    const [data, setData] = useState();
    const getData = async () => {
        const res = await allPatwari(auth?.user._id, auth?.token);
        if (res.success) {
            setData(res.data);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div className={`${styles.cardsContainer}`}>
                {data && data.map((patwari, index) => (
                    <PatwariCard key={index} patwari={patwari} taskData={patwariList[0].taskData} />
                ))}
            </div>

        </div>
    )
}
