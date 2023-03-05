import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Header() {
  return (
    <div className='header'>
      <div className='twitter-header'>
        <NavLink to='/'>
          <img
            src='public/Pulse_logo.svg'
            alt='Twitter logo'
            className='logo'
          />
        </NavLink>
        <div className='buttons'>
          <NavLink to='/'>
            <div className='search'>
              <TagOutlinedIcon />
              <button className='explore'>Explorar</button>
            </div>
          </NavLink>
          <NavLink to='/'>
            <div className='notifications'>
              <SettingsOutlinedIcon />
              <button className='config'>Configuración</button>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
