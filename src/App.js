import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Error from "./pages/common/Error";
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/common/AuthPage';
import HomePage from './pages/common/HomePage';
import AuthContext from './resources/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        {!authCtx.isLoggedIn && (
          <Route exact path='/auth' element={<AuthPage />} />
        )}
        {authCtx.isLoggedIn && (
          <Route exact path='/auth' element={<UserProfile />} />
        )}
        {!authCtx.isLoggedIn && (
          <Route exact path='/auth' element={<AuthPage />} />
        )}
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
