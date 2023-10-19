import React from 'react';
import './dashboard.css'; 
import MenuIcon from '../../assets/svg/MenuIcon';
import Profile from "../../assets/profile.webp"


interface PropType {
  handler: () => void;
}
const DashboardHeader = ({handler}:PropType) => {
  return (
    <div className="dashboard-header">
     <span onClick={handler}>
     <MenuIcon/>
     </span>
     <div className='header_title'>
      Toys For Pets <span className='react_heading'>REACT JS</span>
     </div>
     <div><img className='profile_img' src={Profile} alt='profile image '/></div>
    </div>
  );
}

export default DashboardHeader;
