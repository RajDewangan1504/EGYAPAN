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
import Loading from '../../components/common/Loading'
import { login } from '../../services/AuthServices'
import { useNavigate } from 'react-router-dom'



export default function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector(state => state.authReducer.user);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("");

  const handleOnChange = (event) => {

    setData({ ...data, [event.target.name]: event.target.value });
  }


  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(true);
    login(data).then(
      res => {
        setLoading(false);
        if (res.success) {
          console.log(res);
          dispatch(SAVE_USER_DATA(res.data));
          navigate("/dashboard");
        }
        else {
          setError(res.message);
        }

      }
    ).catch((error)=>{
        setLoading(false);
    })
  }

  return (
    <div className={`${styles.main} flex-1 min-height-100vh`}>
      <div className={styles.box}>

        {loading &&
          <Loading />
        }

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
          name={"password"}
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

        {error &&
          <CustomTypo variant={"body1"} fontSize={"12px"}>{error}</CustomTypo>
        }

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
