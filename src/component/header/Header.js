import React, { useState } from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ContactsIcon from '@mui/icons-material/Contacts';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from '../../assets/imags/logo.png';

function Header() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="outer-header navbar">
      <img className="logoSmScrin" src={logo} alt="logo" />
      <div className="left-header">
        <ul className={`nav-links ${isActive ? 'active' : ''}`}>
          <li className="netflex-logo"><img src={logo} alt="logo" /></li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="right-header">
        <ul>
          <li><SearchIcon /></li>
          <li><NotificationsNoneIcon /></li>
          <li><ContactsIcon /></li>
          <li><ArrowDropDownIcon /></li>
        </ul>
      </div>
      <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={handleClick}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Header;
