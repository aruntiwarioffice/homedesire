import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './components/common/css/App.css';
import './components/common/css/Style.css';
import Layout from './components/Layout/Layout';
import Error from "./pages/common/Error";

import HomePage from './pages/common/HomePage';
import AboutUs from './pages/common/AboutUs';
import Property from './pages/common/Property';
import InteriorDesign from './pages/common/InteriorDesign';
import ContactUs from './pages/common/ContactUs';
import AuthPage from './pages/common/AuthPage';

import Dashboard from './pages/dashboard/Dashboard';
import ProfilePage from './pages/dashboard/ProfilePage';
import PaymentMethods from './pages/dashboard/PaymentMethods';
import AuthProperty from './pages/dashboard/Property';
import Reports from './pages/dashboard/Reports';
import Services from './pages/dashboard/Services';
import SubscriptionMethods from './pages/dashboard/SubscriptionMethods';
import Users from './pages/dashboard/Users';

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
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/property' element={<AuthProperty />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/users' element={<Users />} />
        <Route exact path='/paymentmethods' element={<PaymentMethods />} />
        <Route exact path='/subscriptionmethods' element={<SubscriptionMethods />} />
        <Route exact path='/reports' element={<Reports />} />
        <Route exact path='/profile' element={<ProfilePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      )}
    </Layout>
  );
}

export default App;
