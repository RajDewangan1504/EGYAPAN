import './App.css';
import './global.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import MainRoutes from './routes/MainRoutes';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';



function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className='app'>
          <MainRoutes />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
library.add(fab, fas, far)
