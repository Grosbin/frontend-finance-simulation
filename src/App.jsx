// import 'primereact/resources/themes/vela-purple/theme.css';  //theme
// import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primereact/resources/themes/tailwind-light/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './styles/settings.css';

import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { store } from './store/store';

import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';

const App = () => {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
