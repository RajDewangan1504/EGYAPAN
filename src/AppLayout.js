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
        <div style={{ height: "100vh", width: "100vw", display: "flex", flexDirection: 'column',overflow: "hidden" }}>
            {showSidebar && (
                <div style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1 }}>
                    <Header onLogout={handleLogout} />
                </div>
            )}
            <div style={{ display: "flex", height: "100%", marginTop: showSidebar ? "64px" : "0" }}>
                {showSidebar && (
                    <div style={{ position: "fixed", top: "64px", left: 0, height: "calc(100vh - 64px)", width: "250px" }}>
                        <Sidebar />
                    </div>
                )}
                <div style={{ marginLeft: showSidebar ? "250px" : "0", width: "100%", overflowY: "auto", padding: "20px" }}>
                    {children}
                </div>
            </div>
        </div>
    );
}
