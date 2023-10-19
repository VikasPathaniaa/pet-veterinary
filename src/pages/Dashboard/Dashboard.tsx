// Layout.js
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import DashboardHeader from '../../components/DashboardComponent/DashboardHeader';
import SideBar from '../../components/DashboardComponent/SideBar';
import '../../assets/css/DashboardCss/dashboard.css';

const Layout = ({ children }: any) => {
  const [toggle, setToggle] = useState(true);
  const { isAuthenticated, loginWithRedirect } = useAuth0();



  const handler = () => {
    setToggle(!toggle);
  }

  return isAuthenticated ? (
    <div className="dashboard-container">
      <div className={toggle ? 'left-section hide_left_section_mobile' : 'hide_left_section show_left_section_mobile'}>
        <SideBar setToggle={setToggle} toggle={toggle} />
      </div>
      <div className="right-section">
        <DashboardHeader handler={handler} />
        {children}
      </div>
    </div>
  ) : <h1>
    Not autherised login here               
       <button className={`login_button`} onClick={() => loginWithRedirect()}>Log in</button>
  </h1>;
};

export default Layout;
