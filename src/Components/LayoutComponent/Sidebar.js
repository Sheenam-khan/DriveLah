import React from 'react'
import NavigationRoutes from './NavigationRoutes'
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