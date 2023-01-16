import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './components/common/Style/App.css';
import './components/common/Style/Style.css';
import Layout from './components/Layout/Layout';
import Error from "./pages/common/Error";

import HomePage from './pages/common/HomePage';
import AboutUs from './pages/common/AboutUs';
import Property from './pages/common/Property';
import Search from './pages/common/Search';
import EnquiryNow from './pages/common/EnquiryNow';
import PartnerRegister from './pages/common/PartnerRegister';
import InteriorDesign from './pages/common/InteriorDesign';
import ContactUs from './pages/common/ContactUs';
import AuthPage from './pages/common/AuthPage';
import Login from './pages/common/Login';
import Register from './pages/common/Register';

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
        <Route exact path='/search' element={<Search />} />
        <Route exact path='/enquiry-now' element={<EnquiryNow />} />
        <Route exact path='/partner-register' element={<PartnerRegister />} />
        <Route exact path='/auth' element={<AuthPage />} />
        <Route exact path='/login' element={<Login type='Employee'/>} />
        <Route exact path='/register' element={<Register type='Employee'/>} />
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
