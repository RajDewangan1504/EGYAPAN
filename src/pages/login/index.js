import React, { useState } from 'react'
import styles from './styles.module.css'
import CustomInput from '../../components/common/CustomInput'
import CustomTypo from '../../components/common/CustomTypo/CustomTypo'
import { IconButton, InputAdornment } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomButton from '../../components/common/CustomButton'
import CustomLogo from '../../components/common/CustomLogo'
import LogoComp from '../../components/common/LogoComp'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { SAVE_USER_DATA } from '../../actions/auth'
export default function Login() {

  const dispatch = useDispatch();
  const userData = useSelector(state => state.authReducer.user);
  console.log(userData);

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

  const handleSubmit = () => {
      const data_to_store = {
        hello : "my name is Abhishek"
      }
      dispatch(SAVE_USER_DATA(data_to_store));
  }

  return (
    <div className={`${styles.main} flex-1 min-height-100vh`}>
      <div className={styles.box}>

        <div className='d-flex flex-column align-items-center gap-1' >
          <CustomTypo
            variant={"h3"} fontSize={"25px"}>Login</CustomTypo>

            <LogoComp />
        </div>

        <CustomInput
          name={"email"}
          fullWidth={true}
          placeholder={"Enter Email"}
          onChange={handleOnChange}
          label={"Email"} />


        <CustomInput
          name={"Password"}
          type={!showPassword ? "text" : "password"}
          onChange={handleOnChange}
          fullWidth
          placeholder={"Enter Password"}
          label={"Password"}
          endIcon={<InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              size="large"
            >
              {showPassword ? <FontAwesomeIcon icon="fa-regular fa-eye" fontSize={"1rem"} /> : <FontAwesomeIcon icon="fa-regular fa-eye-slash" fontSize={"1rem"} />}
            </IconButton>
          </InputAdornment>}
        />

        <CustomButton
          text={"Login"}
          onClick={handleSubmit}
          fullWidth={true}
          variant="contained"
        />
      </div>

      <div className={styles.footerText}>
       
          <CustomTypo variant="body2" fontSize={"12px"}>Designed by <u>BitCrackers.com</u><sup>©</sup></CustomTypo>
       
      </div>

    </div>
  )
}
