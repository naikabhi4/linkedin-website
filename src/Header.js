import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter, ChatBubble, NotificationsRounded } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const logOutOfApp = () => {
      dispatch(logout())
      auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
            <img src="https://www.flaticon.com/svg/vstatic/svg/124/124011.svg?token=exp=1620813192~hmac=2566a0d432c17aed97fd112ff92f164f" alt="" />
            <div className="header__search">
            <SearchIcon/>
           <input type="text" placeholder="Search" />
            </div>
           
            </div>
            <div className="header__right">
           <HeaderOption Icon={HomeIcon} title="Home"/>
           <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
           <HeaderOption Icon={BusinessCenter} title="Jobs"/>
           <HeaderOption Icon={ChatBubble} title="Messaging"/>
           <HeaderOption Icon={NotificationsRounded} title="Notification"/>
           <HeaderOption avatar={true} title="Me" onClick={logOutOfApp}/>
           
            </div>
        </div>
    )
}

export default Header
