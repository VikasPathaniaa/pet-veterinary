import React from 'react';
import './dashboard.css';
import Logo from "../../assets/svg/logo.png"
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


const SideBar = ({setToggle , toggle}:any) => {
  const { logout } = useAuth0();
  return (
    <div className='side_Bar'>
      <div className='cross_icon_container'><span className='cross_icon' onClick={()=> 
        setToggle(!toggle)}>X</span></div>
      <div className='side_bar_logo'>
      <Link to="/dashboard"> <img className='dashboard_img' src={Logo} height={50} width={50} alt="image Logo not found" />  </Link> 
        <span style={{ color: "white" }}>Toys for Pets</span>
      </div>
      <div>
      <div className='general'>GENERAL</div>
      <div className='container' >

     
        <div className='category_Box'>
          <span className='title'>
            Service
          </span>
        <Link to="/managefacility">   <p className='sub_title'>Manage Facilities</p> </Link>
        </div>
        <div className='category_Box'>
        <span className='title'>
            Customers
          </span>
          <Link to="/managecustomer">    <p className='sub_title'>Manage customers</p>  </Link>
        </div>
        </div>
        <button className='logout_button' onClick={()=>logout()}>Logout</button>
      </div>


    </div>
  );
}

export default SideBar;
