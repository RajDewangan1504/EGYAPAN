import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./components/sideBar/Sidebar";
import Header from "./components/header";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { logout } from "./actions/auth"; // Import the logout action

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
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: 'column' }}>
            {showSidebar && <Header onLogout={handleLogout} />}
            <div className="d-flex" style={{ height: "100%" }}>
                {showSidebar && <Sidebar />}
                {children}
            </div>
        </div>
    );
}
