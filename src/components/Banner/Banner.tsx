import React, { useEffect, useState } from 'react';
import BannerDog from "../../assets/headerDog.png";
import "../Banner/Banner.css";
import Logo from "../../assets/svg/logo.png"
import MenuIcon from '../../assets/svg/MenuIcon';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Banner = () => {
    const { loginWithRedirect  } = useAuth0();

    const [menuToogle, setToggle] = useState(false)

    // Function to update menuToggle state based on screen size
    const updateMenuState = () => {
        if (window.innerWidth >= 768) { // You can adjust this threshold as needed
            setToggle(false);
        }
    };

    // Use useEffect to run the update function on component mount and window resize
    useEffect(() => {
        updateMenuState();
        window.addEventListener('resize', updateMenuState);
        return () => {
            window.removeEventListener('resize', updateMenuState);
        };
    }, []);
    return (
        <div className='banner_container'>
            <div className='navbar'>
                <div className='logo'>
                    <img src={Logo} height={100} alt="image Logo not found" />
                </div>
                <div className={!menuToogle ? `menu_list` : `show_menu`}>
                    <div className="cross_icon" onClick={() => setToggle(false)}><span>X</span></div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Our Store</li>
                    </ul>
                    <div>
                        <button className={`login_button`} onClick={() => loginWithRedirect()}>Log in</button>
                    </div>
                </div>

                <div className='menu_icon' onClick={() => setToggle(true)}>
                    <MenuIcon />
                </div>
            </div>
            <div className='main_banner'>
                <div className='left_section'>
                    <p className='left_section_heading'>Take Care For Your Smart Dog</p>
                    <p>Happiness is closer than you think</p>
                    <button className='left_section_button'>Explore More </button>
                </div>
                <div className='banner_img_container'>
                    <img src={BannerDog} alt="banner Dog image " />
                </div>
            </div>
        </div>
    )
}

export default Banner;