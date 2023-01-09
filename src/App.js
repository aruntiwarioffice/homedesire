import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './components/common/css/App.css';
import './components/common/css/Style.css';
import Layout from './components/Layout/Layout';
import Error from "./pages/common/Error";
import ProfilePage from './pages/dashboard/ProfilePage';
import AuthPage from './pages/common/AuthPage';
import HomePage from './pages/common/HomePage';
import AboutUs from './pages/common/AboutUs';
import Property from './pages/common/Property';
import InteriorDesign from './pages/common/InteriorDesign';
import ContactUs from './pages/common/ContactUs';

import AuthContext from './resources/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      {!authCtx.isLoggedIn && (
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/about-us' element={<AboutUs />} />
        <Route exact path='/property' element={<Property />} />
        <Route exact path='/services' element={<InteriorDesign />} />
        <Route exact path='/services/interiordesign' element={<InteriorDesign />} />
        <Route exact path='/contact-us' element={<ContactUs />} />
        <Route exact path='/login' element={<AuthPage />} />
        <Route exact path="/logout" element={<Navigate to="/" replace />}/>
        <Route path="*" element={<Error />} />
      </Routes>
      )}
      {authCtx.isLoggedIn && (
      <Routes>
        <Route exact path='/' element={<ProfilePage />} />
        <Route exact path='/profile' element={<ProfilePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      )}
    </Layout>
  );
}

export default App;
