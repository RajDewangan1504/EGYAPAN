import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/sideBar/Sidebar";
import Header from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "./actions/auth"; // Import the logout action
import styles from "./AppLayout.module.css";
import Drawer from "./components/common/CustomDrawer"

export function AppLayout({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.authReducer.user);

    // Handle logout state
    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleLogout = () => {
        dispatch(logout());
    };

    const showSidebar = location.pathname !== '/login';

    return (
        <div className={styles.container}>
            {showSidebar && (
                <div className={styles.headerContainer}>
                    <Header onLogout={handleLogout} />
                </div>
            )}
            <div className={`${styles.mainContent} ${showSidebar ? styles.mainWithSidebar : styles.mainWithoutSidebar}`}>
                {showSidebar && (
                    <div className={styles.sidebarContainer}>
                        <Sidebar />
                    </div>
                )}
                <Drawer/>
                <div className={showSidebar ? styles.contentArea : styles.contentNoSidebar}>
                    {children}
                </div>
            </div>
        </div>
    );
}
