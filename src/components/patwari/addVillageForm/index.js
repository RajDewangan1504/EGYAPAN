import React, { useState } from 'react'
import styles from './styles.module.css'
import CustomPopup from '../../common/CustomPopup'
import CustomTypo from '../../common/CustomTypo/CustomTypo';
import CustomInput from '../../common/CustomInput';
import Loading from '../../common/Loading';
import CustomButton from '../../common/CustomButton';
import { useSelector } from 'react-redux';
import { addVillage } from '../../../services/ConstantServices';


export default function AddVillageForm({ open, setOpen, refresh }) {

    const [loading, setLoading] = useState(false);
    const auth = useSelector(state => state?.authReducer?.user);
    console.log(auth);
    const [error, setError] = useState("");
    const [data, setData] = useState({
        name: "",
        halkaNumber: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async() => {
        const data_to_send = {
            ...data,
            tehsil : auth?.user?._id
        }

        setLoading(true);
        console.log(data_to_send);
        addVillage(data_to_send , auth?.token).then(res => {
            setLoading(false);
            if(!res.success){
                setError(res.message);
            }
            else{
                setOpen(false);
                refresh();
            }
        }).catch((_)=>{
            setLoading(false);
            setError("Something went wrong");
        })

    }

    return (
        <CustomPopup open={open} setOpen={setOpen} maxWidth = "sm" >
            <div className={styles.form}>
                <CustomTypo fontWeight={500} fontSize={"1.5rem"}>Add Village</CustomTypo>
                {loading &&
                    <Loading />}
                <CustomInput
                    name={"name"}
                    placeholder={"Village Name"}
                    label={"Village Name"}
                    onChange={handleChange}
                />

                <CustomInput
                    name={"halkaNumber"}
                    placeholder={"Halka Number"}
                    label={"Halka Number"}
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
    )
}
