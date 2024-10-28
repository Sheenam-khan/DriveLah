import { useState } from "react";
import { Link } from 'react-router-dom'
import NavigationRoutes from "./NavigationRoutes";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navigation = [
    { link: '/subscription', text: 'Learn more' },
    { link: '/subscription', text: 'List your car' },
    { link: '/subscription', text: 'Inbox' },
  ];
  return (
    <header>
      <nav className="navbar fixed-top">
        <button className="menu-icon" onClick={toggle}>
          <i className={isOpen ? 'fa fa-close f-20' : 'fa fa-bars'} />
        </button>
          <h1 className="logo logo-text"><i className='fa fa-car f-20' />DriveLah</h1>
        {isOpen && <ul className="mobilemenu"><NavigationRoutes {...props} onClose={toggle} /> </ul>}
        <ul className="menu">
          {navigation.map(nav => (
            <li key={nav.text}>
              <a href={nav.link} onClick={toggle}>
                {nav.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header