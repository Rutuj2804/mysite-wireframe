import React from 'react'
import Navbar from '../components/Navbar'
import './Layout.css'

const Layout = ({ children }) => {
    return (
        <>
            <Navbar/>
            <div className="layout__AlignmentDiv" >{children}</div>
        </>
    )
}

export default Layout
