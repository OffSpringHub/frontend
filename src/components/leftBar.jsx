import React from 'react';
import { Link } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';

const LeftBar = () => {
    return (
        <div className='Sidebar'>
            <div className="logo">
                OffShoring<span>Hub</span>
            </div>
            <div className="menu">
                <div className="menulist">
                    <Link to='/' className='link' ><DescriptionIcon /> My Test</Link>
                </div>
                <div className="menulist">
                    <Link to='/' className='link' ><DescriptionIcon /> My Test </Link>
                </div>
                <div className="menulist">
                    <Link to='/' className='link' ><DescriptionIcon /> My Test </Link>
                </div>
                <div className="menulist">
                    <Link to='/' className='link' ><DescriptionIcon /> My Test </Link>
                </div>
                <div className="menulist">
                    <Link to='/' className='link' ><DescriptionIcon /> My Test </Link>
                </div>
                <div className="menulist">
                    <Link to='/' className='link' ><DescriptionIcon /> My Test </Link>
                </div>
            </div>
            <div className="account">
                <PersonIcon />
                <HelpIcon />
                <LogoutIcon />
            </div>
        </div>
    );
}

export default LeftBar;
