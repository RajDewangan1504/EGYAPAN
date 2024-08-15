import { useLocation } from "react-router-dom";
import Sidebar from "./components/sideBar/Sidebar";

export function AppLayout({ children }) {
    const location = useLocation();
    const showSidebar = location.pathname !== '/login'; // Don't show sidebar on login page

    return (
        <div className="d-flex">
            {showSidebar && <Sidebar />}
            {children}
        </div>
    );
}