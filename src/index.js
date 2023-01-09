import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './components/common/css/index.css';
import App from './App';
import { AuthContextProvider } from './resources/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
