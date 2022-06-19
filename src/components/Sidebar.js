import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HamburgerContext } from '../store/hamburgerContext';

function Sidebar(props) {
  const { isOpen } = useContext(HamburgerContext);
  let sidebarClasses = isOpen ? 'block fixed top-5 w-64 z-20' : 'hidden static';

  return (
    <nav className={`${sidebarClasses} ${props.className}`}>
      <div className="bg-primary rounded-3xl flex flex-col sidebar-height p-8 items-start">
        <div className="flex-1">
          <div className="font-bold text-white text-3xl">
            <h1 className="font-heading">Dash.</h1>
          </div>
          <div className="my-10">
            <ul className="space-y-5">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center justify-items-start gap-4 text-white text-md font-bold'
                      : 'flex items-center justify-items-start gap-4 text-white text-md font-light'
                  }
                >
                  <i className="fa fa-chart-pie"></i>
                  <p>Dashboard</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/transactions"
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center justify-items-start gap-4 text-white text-md font-bold'
                      : 'flex items-center justify-items-start gap-4 text-white text-md font-light'
                  }
                >
                  <i className="fa fa-tag"></i>
                  <p>Transactions</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/schedules"
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center justify-items-start gap-4 text-white text-md font-bold'
                      : 'flex items-center justify-items-start gap-4 text-white text-md font-light'
                  }
                >
                  <i className="fa-regular fa-calendar"></i>
                  <p>Schedules</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center justify-items-start gap-4 text-white text-md font-bold'
                      : 'flex items-center justify-items-start gap-4 text-white text-md font-light'
                  }
                >
                  <i className="fa-regular fa-user"></i>
                  <p>Users</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    isActive
                      ? 'flex items-center justify-items-start gap-4 text-white text-md font-bold'
                      : 'flex items-center justify-items-start gap-4 text-white text-md font-light'
                  }
                >
                  <i className="fa-solid fa-gear"></i>
                  <p>Settings</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white text-md font-light gap-2 flex flex-col">
          <div>
            <Link to="/help">Help</Link>
          </div>
          <div>
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
