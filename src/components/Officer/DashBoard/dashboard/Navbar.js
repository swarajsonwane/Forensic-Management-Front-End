import { Link } from 'react-router-dom';
import React , {useState}from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';
import {SidebarData } from './SidebarData';
function Navbar() {
    const [sidebar, setSidebar] = useState(false);
     const showSidebar = ()=> setSidebar(!sidebar);
    return (
        <>
        <div className="navbar">
        <Link to="#" className = "menu-bars">
         <FaIcons.FaBars onClick = {showSidebar}/>
        </Link>
        <nav   className = {sidebar ? 'nav-menu-active': 'nav-menu'}>
            
            <ul className="nav-menu-items">
                <li className="navbar-toggle" onClick = {showSidebar}>
                <Link to="#" className = "menu-bars">
                    <AiIcons.AiOutlineClose/>
                 </Link>
                </li>
                {SidebarData.map((item , index) => {
                    return(
                        <li key={index} className = {item.cName}>
                            <Link to = {item.path}>
                                {item.icon}
                                <span>{item.title}</span> 
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </div> 
     </>
    )
}

export default Navbar;
