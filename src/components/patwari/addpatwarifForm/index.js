import React, { useState } from 'react'
import CustomTypo from '../../common/CustomTypo/CustomTypo'
import CardWrap from '../../common/CardWrap'
import CustomInput from '../../common/CustomInput'
import styles from './styles.module.css'
import CustomButton from '../../common/CustomButton'
import CustomPopup from '../../common/CustomPopup'
export default function AddPatwariForm({ open, setOpen }) {

    const [data, setData] = useState({
        name: "",
        halkaNumber: null,
        phoneNumber: "",

    })

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const handleSubmit = () => {

    }
    console.log(data);

    return (
        // <div className={styles.main}>
        <CustomPopup open={open} setOpen={setOpen} >
            <div className={styles.form}>
                <CustomTypo fontWeight={500} fontSize={"1.5rem"}>Add Patwari</CustomTypo>

                <CustomInput
                    name={"name"}
                    placeholder={"Patwari Name"}
                    label={"Patwari Name"}

                    onChange={handleChange}
                />

                <CustomInput
                    name={"halkaNumber"}
                    placeholder={"Halka Number"}
                    label={"Halka Number"}
                    onChange={handleChange}
                />

                <CustomInput
                    name={"phoneNumber"}
                    placeholder={"Phone Number"}
                    label={"Phone Number"}
                    onChange={handleChange}
                />

                <CustomButton
                    text={"Submit"}
                    onClick={handleSubmit}
                />
            </div>
        </CustomPopup>
        // </div>
    )
}
