import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import "./Sidebar.css"

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItem =(topic) =>(
        <div className="sidebar__recentItem">
            <span className="siderbar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1619350447432-c7f01f6afc01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
                <Avatar src={user.photoUrl} className="sidebar__avatar"/>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                  <p>Who view your profile</p>
                  <p className="sidebar__statNumber">
                      2500
                  </p>
                </div>
                <div className="sidebar__stat">
                <p>Views on post</p>
                  <p className="sidebar__statNumber">
                      2200
                  </p>
                    </div>
                     </div>
                     <div className="sidebar__bottom">
                        <p>Recent</p>
                        {recentItem("reactjs")}
                        {recentItem("css")}
                        {recentItem("Javascript")}
                        {recentItem("Computer Science")}
                        {recentItem("blackhole")}
                    </div>

        </div>
    )
}

export default Sidebar
