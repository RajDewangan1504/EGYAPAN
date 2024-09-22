import React, { useState, useEffect } from 'react';
import CustomPopup from '../../common/CustomPopup';
import styles from './styles.module.css';
import CustomInput from '../../common/CustomInput';
import { getVillagesByHalka, getGyapanTypes, allPatwari } from '../../../services/ConstantServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomButton from '../../common/CustomButton';
import CustomSelect from '../../common/CustomSelect/index';
import { uploadFile } from '../../../utils/s3Helper';
import { useSelector } from 'react-redux';
import { createGyapan } from '../../../services/ConstantServices';
import { formatISO, parseISO } from 'date-fns';
import { convertDateToTimestamp } from '../../Utils';
import Loading from '../../common/Loading'
import CustomTypo from '../../common/CustomTypo/CustomTypo'




const CreateGyapan = ({ open, setOpen }) => {
    const auth = useSelector(state => state.authReducer.user);

    const [formData, setFormData] = useState({
        tehsil: '',
        deadline: '',
        gyapanId: '',
        caseId: '',
        category: '',
        patwari: '',
        village: '',
        attachment: '',
        remark: ''
    });


    const [selectedFile , setSelectedFile] = useState(null);

    const [patwariName, setPatwariName] = useState([]);
    const [villages, setVillages] = useState([]);
    const [gyapanType, setGyapanType] = useState([]);
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (open) {
            getData();
            setFormData({
                ...formData,
                tehsil: auth?.user?._id.toString(),
            });
        }
    }, [open]);



    const getData = async () => {
        try {

            const resPatwari = await allPatwari(auth.user?._id, auth.token);
            if (resPatwari.success) {
                const names = resPatwari.data.map(patwari => ({
                    label: patwari.name,
                    value: patwari._id,
                    halkaNumber: patwari.halkaNumber
                }));
                setPatwariName(names);
            } else {
                console.error('Failed to retrieve patwari list');
            }

            // Fetch gyapan types

            const resGyapanTypes = await getGyapanTypes(auth.token);
            if (resGyapanTypes.success) {
                const types = resGyapanTypes.data.map(type => ({
                    label: type.name,
                    value: type._id
                }));
                setGyapanType(types);
            } else {
                console.error('Failed to retrieve gyapan types list');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const handleChange = async (e) => {
        const { name, value } = e.target;
        if (name === 'patwari') {
            const selectedPatwari = patwariName.find(patwari => patwari.value === value);
            const halkaNumber = selectedPatwari ? selectedPatwari.halkaNumber : '';

            setFormData({
                ...formData,
                [name]: value,
            });

            if (halkaNumber) {
                try {
                    const res = await getVillagesByHalka(halkaNumber, auth.token);
                    if (res.success) {
                        const villageOptions = res.data.map(village => ({
                            label: village.name,
                            value: village._id,
                        }));
                        setVillages(villageOptions);
                    } else {
                        console.error('Failed to retrieve villages list');
                    }
                } catch (error) {
                    console.error('An error occurred:', error);
                }
            }
        }
        else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleFileInput = async (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const date = convertDateToTimestamp(formData.deadline);
        const dataToSend = {
            ...formData,
            deadline: date
        }


        if (selectedFile) {
            try {
                const result = await uploadFile(selectedFile);
                console.log(result);
                setFileName(selectedFile.name);
                setFormData({
                    ...formData,
                    attachment: result.Location
                });
                setLoading(false);
            } catch (error) {
                console.error('File upload failed:', error);
                setLoading(false);
            }
        }


        try {
            console.log("formdata", dataToSend);
            const response = await createGyapan(dataToSend, auth.token);

            if (response.success) {
                setLoading(false);
                console.log('Gyapan created successfully:', response.data);
                setFormData({
                    tehsil: '',
                    deadline: '',
                    gyapanId: '',
                    caseId: '',
                    category: '',
                    patwari: '',
                    village: '',
                    attachment: '',
                    remark: ''
                })

                setFileName('');

                setOpen(false);
            } else {
                console.error('Failed to create gyapan:', response.message);
            }
        } catch (error) {
            console.error('An error occurred while creating gyapan:', error);
            setLoading(false);
        }
    };

    return (
        <CustomPopup
            open={open}
            setOpen={setOpen}
        >
            <div className={styles.formContainer}>
                {loading &&
                    <Loading />}
                <h2 className={styles.title}>ज्ञापन</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <CustomInput
                        label={"ज्ञापन की समय सीमा"}
                        onChange={handleChange}
                        type={"datetime-local"}
                        name="deadline"
                        value={formData.deadline} // Display ISO date string
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
                        name="caseId"
                        value={formData.caseId}
                        onChange={handleChange}
                        placeholder={"मामला क्रमांक"}
                        startIcon={<FontAwesomeIcon icon="fa-solid fa-keyboard" color='#0005' className='mr-05' />}
                    />

                    <CustomSelect
                        label="ज्ञापन प्रकार"
                        placeholder={"ज्ञापन प्रकार"}
                        options={gyapanType}
                        value={formData.category}
                        onChange={handleChange}
                        name="category"
                    />

                    <CustomSelect
                        label={"पटवारी का नाम"}
                        placeholder={"पटवारी का नाम"}
                        options={patwariName}
                        value={formData.patwari}
                        onChange={handleChange}
                        name="patwari"
                    />

                    <CustomSelect
                        label={"ग्राम "}
                        placeholder={"ग्राम "}
                        options={villages}
                        value={formData.village}
                        onChange={handleChange}
                        name="village"
                    />

                    <CustomInput
                        label={" टिप्पणी"}
                        name="remark"
                        type={"text"}
                        value={formData.remark}
                        onChange={handleChange}
                        multiline
                        maxRows={4}
                        maxRow={4}
                        startIcon={<FontAwesomeIcon icon="fa-solid fa-message" color='#0005' className='mr-05' />}
                        placeholder={"टिप्पणी"}
                    />

                    <div className={styles.buttons}>
                        <div className='d-flex width-50 align-items-center'>
                            <input
                                style={{ display: 'none' }}
                                id="file-upload"
                                type="file"
                                onChange={handleFileInput}
                            />
                            <CustomButton
                                text="Upload File"
                                onClick={() => document.getElementById('file-upload').click()}
                            />
                            {selectedFile && (
                                <span className="ml-2 border-primary-gradient p-05">{selectedFile?.name}</span>
                            )}
                        </div>

                        {error &&
                            <CustomTypo fontSize={"14px"}>{error}</CustomTypo>
                        }

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
