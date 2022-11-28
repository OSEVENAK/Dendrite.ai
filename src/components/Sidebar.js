import React from "react";

import { BsSearch, BsHouse } from 'react-icons/bs';
import { Link } from "react-router-dom";

const styles = {
  background: "#3f51b5d4"
}


function Sidebar(props) {
  let { sidebarNav } = props
  return <div style={styles}>
  {
    sidebarNav?.map(({label, icon, index})=>{
       return (
         <div key={index} className="flex">
           <Link to='/'><div className="nav-button"> {icon} </div></Link>
           <Link to='/'><div className="nav-button"> {label} </div></Link>
         </div>
       );
    })
  }
  </div>;
}

Sidebar.defaultProps = {
  sidebarNav:[{
    route: '/',
    label: 'Home',
    icon : <BsHouse/>,
    index: 1
  }, {
    route: '/search',
    label: 'Search',
    icon : <BsSearch/>,
    index : 2
  }]
}

export default Sidebar;
