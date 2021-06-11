import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData =[
    {
        title:'Home',
        path:'/officer-dashboard',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<AiIcons.AiFillFilePdf/>,
        cName:'nav-text'
    },
    {
        title:'FIR',
        path:'/FIR',
        icon:<IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Officers',
        path:'/officer-details',
        icon:<IoIcons.IoMdPeople/>,
        cName:'nav-text'
    },
    {
        title:'Suppport',
        path:'/about',
        icon:<IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
]