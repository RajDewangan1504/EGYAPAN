
import './App.css';

import './global.css'
import SideBar from './components/sideBar/Sidebar'
import AppRoutes from './routes/Routes';
import "./global.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='d-flex'>
        <SideBar />
        <div className='flex-grow p-2'>
          <AppRoutes />
        </div>
      </div>
    </Router>
  );
}

export default App;
