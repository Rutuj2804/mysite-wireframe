import { CachedOutlined, RssFeedRounded, ViewComfyOutlined } from '@material-ui/icons'
import React from 'react'
import './HomeUpperBar.css'

const HomeUpperBar = () => {
    return (
        <div className="homeUpperBar__Wrapper" >
            <div className="homeUpperBar__LeftSideOptions" >
                <div className="homeUpperBar__Selected"><RssFeedRounded/> <p>Permissions</p></div>
                <div className="homeUpperBar__NotSelected"><ViewComfyOutlined/> <p>Approval Matrix</p></div>
            </div>
            <div className="homeUpperBar__RightSideOptions" >
                <CachedOutlined/> <p>Last synced 15 mins ago</p>
            </div>
        </div>
    )
}

export default HomeUpperBar
