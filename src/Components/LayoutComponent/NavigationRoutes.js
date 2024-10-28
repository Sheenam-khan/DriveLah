import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes/routes';
const NavigationRoutes = props => {
    const activeroute = localStorage.getItem('activeRoute');
    const [activeRoute, setActiveRoute] = useState(activeroute);
    return (
        <>
            {routes.map((item, index) =>
                (item.name && <li key={index} className={item.path == activeroute ? 'active nav-item' : 'nav-item'} disabled={!item.completed}>
                    <Link className={`nav-link ${item.path === activeroute ?'enableColor':!item.completed ? 'disableColor' : 'enableColor'}`} to={
                        item.completed && 
                        item.path}
                        onClick={() => {
                            if(item.completed){
                            setActiveRoute(item.path)
                            localStorage.setItem('activeRoute', item.path);
                            }
                            props.onClose && props.onClose()
                        }} disabled={!item.completed}>
                        {/* <img src={item.imgSrc} alt="" className="btn" /> */}
                        <span className="nav-title" disabled={!item.completed}>{item.name}</span>
                        {item?.completed && <i className='fa fa-check-circle f-20' />}
                    </Link>
                </li>)
            )}
        </>
    )
}

export default NavigationRoutes