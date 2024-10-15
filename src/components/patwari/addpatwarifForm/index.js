import React, { useState } from 'react';
import CustomTypo from '../../common/CustomTypo/CustomTypo';
import CustomInput from '../../common/CustomInput';
import CustomButton from '../../common/CustomButton';
import CustomPopup from '../../common/CustomPopup';
import { addPatwari } from '../../../services/PatwariServices';
import { useSelector } from 'react-redux';
import Loading from '../../common/Loading';
import styles from './styles.module.css';

export default function AddPatwariForm({ open, refresh, setOpen }) {
    const auth = useSelector(state => state.authReducer.user);
    const [data, setData] = useState({
        name: "",
        phoneNumber: "",
        tehsil: auth.user._id
    });
    const [halkaNumbers, setHalkaNumbers] = useState([{ value: "" }]);  // Array of halkaNumbers
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        // If the input is for the phone number, restrict to 10 digits
        if (name === "phoneNumber") {
            if (/^\d{0,10}$/.test(value)) {  // Allow only digits and limit to 10
                setData({ ...data, [name]: value });
            }
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const handleHalkaNumberChange = (index, event) => {
        const newHalkaNumbers = [...halkaNumbers];
        newHalkaNumbers[index].value = event.target.value;
        setHalkaNumbers(newHalkaNumbers);
    };

    const handleAddHalkaNumber = () => {
        setHalkaNumbers([...halkaNumbers, { value: "" }]);  // Add a new halka number input
    };

    const handleRemoveHalkaNumber = (index) => {
        const newHalkaNumbers = halkaNumbers.filter((_, i) => i !== index);  // Remove the halka number input
        setHalkaNumbers(newHalkaNumbers);
    };

    const handleSubmit = () => {
        setLoading(true);
        setError("");

        // Phone number validation
        if (!/^\d{10}$/.test(data.phoneNumber)) {
            setLoading(false);
            setError("Phone number must be exactly 10 digits.");
            return;
        }

        // Ensure all halka numbers are valid (non-empty)
        if (halkaNumbers.some(h => h.value.trim() === "")) {
            setLoading(false);
            setError("Please fill out all Halka Numbers.");
            return;
        }

        const halkaNumberArray = halkaNumbers.map(h => h.value);  // Extract halkaNumber values

        const dataToSend = {
            ...data,
            halkaNumbers: halkaNumberArray  // Send the array of halka numbers
        };
        console.log("dataToSend",dataToSend);

        addPatwari(dataToSend, auth.token).then(
            res => {
                setLoading(false);
                if (res.success) {
                    refresh();
                    setOpen(false);
                    setData({
                        name: "",
                        phoneNumber: "",
                        tehsil: auth.user._id
                    });
                    setHalkaNumbers([{ value: "" }]);
                } else {
                    setError(res.message);
                }
            }
        ).catch((error) => {
            setLoading(false);
            setError("Something went wrong");
        });
    };

    return (
        <CustomPopup open={open} setOpen={setOpen} maxWidth="sm">
            <div className={styles.form}>
                <CustomTypo fontWeight={500} fontSize={"1.5rem"}>Add Patwari</CustomTypo>
                {loading && <Loading />}

                <CustomInput
                    name={"name"}
                    placeholder={"Patwari Name"}
                    label={"Patwari Name"}
                    onChange={handleChange}
                />

                <CustomInput
                    name={"phoneNumber"}
                    placeholder={"Phone Number"}
                    label={"Phone Number"}
                    value={data.phoneNumber}
                    onChange={handleChange}
                />

                {/* Dynamic Inputs for Halka Numbers */}
                {halkaNumbers.map((halka, index) => (
                    <div key={index} className={`gap-2 ${styles.halkaNumberRow}`}>
                        <CustomInput
                            name={`halkaNumber-${index}`}
                            placeholder={`Halka Number ${index + 1}`}
                            label={`Halka Number ${index + 1}`}
                            value={halka.value}
                            onChange={(e) => handleHalkaNumberChange(index, e)}
                        />
                        <div className='pt-1'>
                        {halkaNumbers.length > 1 && (
                            <CustomButton
                                onClick={() => handleRemoveHalkaNumber(index)}
                                text={"Remove"}
                                className='m-2'
                                
                           />
                        )}
                        </div>
                    </div>
                ))}

                {/* Button to add more Halka Numbers */}
                <CustomButton onClick={handleAddHalkaNumber} className={styles.addButton}
                    text={"+ Add Another Halka Number"}

                />



                {error && <CustomTypo fontSize={"14px"}>{error}</CustomTypo>}

                <div className='d-flex justify-content-end'>
                    <CustomButton
                        text={"Submit"}
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </CustomPopup>
    );
}
