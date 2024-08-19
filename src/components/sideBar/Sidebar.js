import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faLock, faFileAlt, faPhone, faSignOutAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';
import '../../global.css'

function Sidebar() {
  return (
    <div className={`d-flex flex-column ${styles.sidebar}`}>
      <div className={`mb-2 mt-0  ${styles.logo}`}>
        {/* Menu */}
      </div>
      <ul className={`p-0 m-0  flex-grow ${styles.menu}`}>
        <li className={`justify-content-center ${styles.menuItem}`}>
          <NavLink exact to="/" className={({ isActive }) => isActive ? styles.active : undefined}>
            <FontAwesomeIcon icon={faHome} className={`mr-1 ${styles.menuIcon}`}  />
            Dashboard
          </NavLink>
        </li>
        <li className={`justify-content-center ${styles.menuItem}`}>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>
            <FontAwesomeIcon icon={faInfoCircle} className={`mr-1 ${styles.menuIcon}`}  />
            About
          </NavLink>
        </li>
        <li className={`justify-content-center ${styles.menuItem}`}>
          <NavLink to="/privacy-policy" className={({ isActive }) => isActive ? styles.active : undefined}>
            <FontAwesomeIcon icon={faLock} className={`mr-1 ${styles.menuIcon}`}  />
            Privacy Policy
          </NavLink>
        </li>
        <li className={`justify-content-center ${styles.menuItem}`}>
          <NavLink to="/terms-conditions" className={({ isActive }) => isActive ? styles.active : undefined}>
            <FontAwesomeIcon icon={faFileAlt} className={`mr-1 ${styles.menuIcon}`} />
            Terms & Conditions
          </NavLink>
        </li>
        {/* <li className={`justify-content-center ${styles.menuItem}`}>
          <NavLink to="/contacts" className={({ isActive }) => isActive ? styles.active : undefined}>
            <FontAwesomeIcon icon={faPhone} className={`mr-1 ${styles.menuIcon}`}  />
            Contacts
          </NavLink>
        </li> */}
      </ul>
      <div className={`mt-auto ${styles.logoutSettings}`}>
        <ul className={`p-0 m-0  flex-grow ${styles.menu}`}>
          <li className={`justify-content-center mb-1 ${styles.menuItem}`}>
            <NavLink to="/logout" className={({ isActive }) => isActive ? styles.active : undefined}>
              <FontAwesomeIcon icon={faSignOutAlt} className={`mr-1 ${styles.menuIcon}`} />
              Logout
            </NavLink>
          </li>
          {/* <li className={`justify-content-center mb-1 ${styles.menuItem}`}>
            <NavLink to="/settings" className={({ isActive }) => isActive ? styles.active : undefined}>
              <FontAwesomeIcon icon={faCog} className={`mr-1 ${styles.menuIcon}`}  />
              Settings
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
