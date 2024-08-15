import React, { useState } from 'react'
import styles from './styles.module.css'
import CustomInput from '../../components/common/CustomInput'
import CustomTypo from '../../components/common/CustomTypo/CustomTypo'
import {  IconButton, InputAdornment } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomButton from '../../components/common/CustomButton'
import CustomLogo from '../../components/common/CustomLogo'
export default function Login() {

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleOnChange = (event) => {
    setData({ [event.name]: event.value });
  }


  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`${styles.main} flex-1`}>
      <div className={styles.box}>
        <CustomTypo
          variant={"h5"}>Login</CustomTypo>

        <CustomLogo/>  


        <CustomInput
          name={"email"}
          fullWidth = {true}
          onChange={handleOnChange}
          label={"Email"} />


        <CustomInput
          name={"Password"}
          type={!showPassword ? "text" : "password"}
          onChange={handleOnChange}
          fullWidth
          label={"Password"}
          endIcon={<InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="large"
            >
              {showPassword ? <FontAwesomeIcon icon="fa-regular fa-eye" fontSize={"1rem"} /> : <FontAwesomeIcon icon="fa-regular fa-eye-slash" fontSize={"1rem"}/>}
            </IconButton>
          </InputAdornment>}
        />

        <CustomButton 
          text={"Login"}
          onClick={null}  
          fullWidth={true} 
          variant=  "contained"  
        />
      </div>
    </div>
  )
}
