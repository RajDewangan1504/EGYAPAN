import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLock, faFileAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';
import '../../global.css'

import { useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';
import { persistor } from '../../store';

function Sidebar() {

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
  };


  return (
    <div className={`d-flex flex-column ${styles.sidebar}`}>
      <div className={`mb-2 mt-0  ${styles.logo}`}>
        {/* Menu */}
      </div>
      <ul className={`p-0 m-0  flex-grow ${styles.menu}`}>
        <li className={`justify-content-center ${styles.menuItem}`}>
          <NavLink exact to="/" className={({ isActive }) => isActive ? styles.active : undefined}>
            <FontAwesomeIcon icon={faHome} className={`mr-1 ${styles.menuIcon}`} />
            Dashboard
          </NavLink>
        </li>
        <li className={`justify-content-center ${styles.menuItem}`}>
          <NavLink to="/patwari" className={({ isActive }) => isActive ? styles.active : undefined}>
            <FontAwesomeIcon icon={"fa-solid fa-user"} className={`mr-1 ${styles.menuIcon}`} />
            All Patwari
          </NavLink>
        </li>
        {/* <li className={`justify-content-center ${styles.menuItem}`}>
          <NavLink to="/addpatwari" className={({ isActive }) => isActive ? styles.active : undefined}>
            <FontAwesomeIcon icon={"fa-solid fa-user"} className={`mr-1 ${styles.menuIcon}`} />
            Add Patwari
          </NavLink>
        </li> */}
        <li className={`justify-content-center ${styles.menuItem}`}>
          <NavLink to="/privacy-policy" className={({ isActive }) => isActive ? styles.active : undefined}>
            <FontAwesomeIcon icon={faLock} className={`mr-1 ${styles.menuIcon}`} />
            Privacy Policy
          </NavLink>
        </li>
        <li className={`justify-content-center ${styles.menuItem}`}>
          <NavLink to="/terms-conditions" className={({ isActive }) => isActive ? styles.active : undefined}>
            <FontAwesomeIcon icon={faFileAlt} className={`mr-1 ${styles.menuIcon}`} />
            Terms & Conditions
          </NavLink>
        </li>
        
      </ul>
      <div className={`mt-auto ${styles.logoutSettings}`}>
        <ul className={`p-0 m-0  flex-grow ${styles.menu}`}>
          <li className={`justify-content-center mb-1 ${styles.menuItem}`}>
            <button onClick={handleLogout}  to="/logout" className={({ isActive }) => isActive ? styles.active : undefined} >
              {/* <NavLink> */}
                <FontAwesomeIcon icon={faSignOutAlt} className={`mr-1 ${styles.menuIcon}`} />
                Logout
              {/* </NavLink> */}
            </button>
          </li>
       
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
