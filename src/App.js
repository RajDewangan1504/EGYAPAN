import './App.css';
import './global.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import MainRoutes from './routes/MainRoutes';



function App() {
  return (
    <div className="min-height-100vh">
      <MainRoutes />
    </div>
  );
}

export default App;
library.add(fab, fas, far)
