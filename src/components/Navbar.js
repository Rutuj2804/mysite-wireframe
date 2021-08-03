import React from 'react'
import './Navbar.css'
import mySite from '../images/logo.png'
import mySiteW from '../images/mYSITE.png'
import projects from '../images/projects.png'
import { Avatar, IconButton } from '@material-ui/core'
import { HelpOutlineOutlined, NotificationsNoneOutlined, SecurityOutlined, WorkOutlineRounded } from '@material-ui/icons'

const Navbar = () => {
    return (
        <div className="navbar__Wrapper">
            <div className="navbar__TopBar">
                <div className="navbar__Logo">
                    <img src={mySite} alt="logo" />
                    <img src={mySiteW} alt="logo" className="navbar__LogoNAme" />
                </div>
                <div className="navbar__RightMenu">
                    <div className="navbar__User">
                        <Avatar/>
                        <h5>Kishore</h5>
                    </div>
                    <IconButton><NotificationsNoneOutlined/></IconButton>
                    <IconButton><HelpOutlineOutlined/></IconButton>
                </div>
            </div>
            <div className="navbar__LeftBar">
                <ul>
                    <li><img src={projects} alt="projects" /> Projects</li>
                    <li><WorkOutlineRounded/> Organisation Profile</li>
                    <li className="navbar__Current" ><SecurityOutlined/> Access Control</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar