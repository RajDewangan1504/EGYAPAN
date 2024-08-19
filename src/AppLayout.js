import { useLocation } from "react-router-dom";
import Sidebar from "./components/sideBar/Sidebar";
import Header from "./components/header";

export function AppLayout({ children }) {
    const location = useLocation();
    const showSidebar = location.pathname !== '/login'; // Don't show sidebar on login page

    return (
        <div style = {{height : "100%",width : "100%" , display : "flex", flexDirection :'column'}}>
            {showSidebar && <Header />}
            <div className="d-flex" style = {{height : "100%"}}>
                {showSidebar && <Sidebar />}
                {children}
            </div>
        </div>
    );
}