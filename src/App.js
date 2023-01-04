// import logo from './logo.svg';
import './App.css';
import './Style.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import { Route, Routes, Link } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import Help from "./components/dashboard/Help";
import Users from "./components/dashboard/Users";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Enquiry from "./pages/Enquiry";
import Customer from "./pages/Customer";
import PropertyPage from "./pages/PropertyPage";
import PartnerRegister from "./pages/PartnerRegister";
import Login from "./user/Login";
import Registration from "./user/Registration";
import AddUser from "./user/Add";
import UserDetails from "./user/Details";
import UserEdit from "./user/Edit";
import UserList from "./user/List";
// import Dashboard from "./admin/Dashboard";



//Please do not code in this page by shaurabh
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/enquiry-now' element={<Enquiry />} />
        <Route exact path='/partner-register' element={<PartnerRegister />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/registration' element={<Registration />} />
        {/* <Route exact path='/dashboard' element={<Dashboard />} /> */}
        <Route exact path='/customer' element={<Customer />} />
        <Route exact path='/property' element={<PropertyPage />} />
        <Route exact path='/add-user' element={<AddUser />} />
        <Route exact path='/user-details' element={<UserDetails />} />
        <Route exact path='/edit-user' element={<UserEdit />} />
        <Route exact path='/user-list' element={<UserList />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/help' element={<Help />} />
        <Route exact path='/users' element={<Users />} />
        <Route path="*" element={<Error />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
