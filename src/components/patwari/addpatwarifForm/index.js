import React, { useState } from 'react'
import CustomTypo from '../../common/CustomTypo/CustomTypo'
import CardWrap from '../../common/CardWrap'
import CustomInput from '../../common/CustomInput'
import styles from './styles.module.css'
import CustomButton from '../../common/CustomButton'
import CustomPopup from '../../common/CustomPopup'
import { addPatwari } from '../../../services/PatwariServices'
import { useSelector } from 'react-redux'
import Loading from '../../common/Loading'
export default function AddPatwariForm({ open, refresh, setOpen }) {

    const auth = useSelector(state => state.authReducer.user);
    const [data, setData] = useState({
        name: "",
        halkaNumber: null,
        phoneNumber: "",
        tehsil: auth.user._id
    })
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }

    const handleSubmit = () => {
        setLoading(true);
        setError("");
        addPatwari(data, auth.token).then(
            res => {
                setLoading(false);
                console.log(res);
                if (res.success) {
                    refresh();
                    setOpen(false);

                }
                else {
                    setError(res.message);
                }
            }
        ).catch((error) => {
            setLoading(false);
        })
    }
    console.log(data);

    return (
        // <div className={styles.main}>
        <CustomPopup open={open} setOpen={setOpen} maxWidth = "sm">
            <div className={styles.form}>
                <CustomTypo fontWeight={500} fontSize={"1.5rem"}>Add Patwari</CustomTypo>
                {loading &&
                    <Loading />}
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

                {error &&
                    <CustomTypo fontSize={"14px"}>{error}</CustomTypo>
                }

                <div className='d-flex justify-content-end'>
                    <CustomButton
                        text={"Submit"}
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </CustomPopup>
        // </div>
    )
}
