import React, { useState } from 'react';
import CustomPopup from '../../common/CustomPopup';
import CustomTypo from '../../common/CustomTypo/CustomTypo';
import styles from './styles.module.css'
import CustomInput from '../../common/CustomInput';
// import '../../../global.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomButton from '../../common/CustomButton';
import CustomSelect from '../../common/CustomSelect/index'

const CreateGyapan = ({ open, setOpen }) => {

    const [formData, setFormData] = useState({
        deadline: '',
        gyapanId: '',
        caseNumber: '',
        gyapanType: '',
        patwariName: '',
        notes: ''
    });

    const gyapanType = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

   



    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <CustomPopup
            open={open}
            setOpen={setOpen}

        >

            <div className={styles.formContainer}>
                <h2 className={styles.title}>ज्ञापन</h2>
                <form onSubmit={handleSubmit} className={styles.form}>

                    <CustomInput
                        label={"ज्ञापन की समय सीमा"}
                        onChange={handleChange}
                        type={"date"}
                        name="deadline"
                        value={formData.deadline}
                        placeholder={"ज्ञापन की समय सीमा"}
                        color="#0005"
                        startIcon={<FontAwesomeIcon icon={"fa-solid fa-calendar-days"} color='#0005' className='mr-05' />}

                    />

                    <CustomInput
                        label={"ज्ञापन ID"}
                        onChange={handleChange}
                        type={"text"}
                        name="gyapanId"
                        value={formData.gyapanId}
                        placeholder={"ज्ञापन ID"}
                        className={styles.input}
                        startIcon={<FontAwesomeIcon icon="fa-regular fa-pen-to-square" color='#0005' className='mr-05' />}

                    />


                    <CustomInput
                        label={"मामला क्रमांक"}
                        type={"text"}
                        name="caseNumber"
                        value={formData.caseNumber}
                        onChange={handleChange}
                        placeholder={"मामला क्रमांक"}
                        startIcon={<FontAwesomeIcon icon="fa-solid fa-keyboard" color='#0005' className='mr-05' />}
                    />


                    <CustomSelect
                        label="ज्ञापन प्रकार"
                        plceholder={"ज्ञापन प्रकार"}
                        options={gyapanType}
                        value={formData.gyapanType}
                        onChange={handleChange}
                        name="gyapanType"
                    />

                    <CustomSelect
                        label={"पटवारी का नाम"}
                        placeholder={"पटवारी का नाम"}
                        options={gyapanType}
                        value={formData.patwariName}
                        onChange={handleChange}
                        name="gyapanType"
                    />




                    



                    <CustomInput
                        label={" टिप्पणी"}
                        name="notes"
                        type={"text"}
                        value={formData.notes}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                        maxRow={4}
                        startIcon={<FontAwesomeIcon icon="fa-solid fa-message" color='#0005' className='mr-05' />}

                        placeholder={"टिप्पणी"}
                    />

                    <div className={styles.buttons}>

                        <input

                            style={{ display: 'none' }}
                            id="file-upload"
                            type="file"
                        />



                        <CustomButton
                            text="Upload File"
                            onClick={() => document.getElementById('file-upload').click()}

                        />



                        <CustomButton
                            type="submit"
                            text="Submit"
                        />
                    </div>
                </form>
            </div>
        </CustomPopup>
    );
};

export default CreateGyapan;