import React from 'react'
import NavigationRoutes from './Navbar'
const Sidebar = (props) => {
  return (
    <aside className='sidebar sidebar-offcanvas menu'>
      <ul className="nav" >
       <NavigationRoutes {...props}/>
      </ul>
    </aside>
  )
}

export default Sidebar