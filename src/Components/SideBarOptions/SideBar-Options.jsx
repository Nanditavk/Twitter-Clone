import React from 'react';
import './SideOptions.css'
// import { Icon } from '@mui/icons-material';

 function SideBarOptions({active, text, Icon}) {
  return (
    <div className={`sidebarOpts ${active && 'sidebarOpts--active'}`}>
      <Icon/>
      <h1>{text}</h1>
      
    </div>
  )
}
export default SideBarOptions;

