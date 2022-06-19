import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../store/authContext';
import { HamburgerContext } from '../store/hamburgerContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
function Header(props) {
  const { toggle } = useContext(HamburgerContext);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
    logout();
  };

  return (
    <nav className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-heading font-bold">{props.title}</h1>
      </div>
      <div className="flex items-center space-x-7">
        <div className="hidden md:block bg-white px-4 py-1 rounded-xl">
          <input
            type="text"
            className="outline-none placeholder:text-secondaryText"
            placeholder="Search..."
          />
          <i className="fa fa-search text-secondaryText"></i>
        </div>
        <div className="flex justify-between items-center space-x-7">
          <button onClick={toggle}>
            <i className="lg:hidden text-xl fa-solid fa-bars"></i>
          </button>
          <i className="text-xl fa-regular fa-bell"></i>
          <button onClick={handleLogout}>
            <img
              src={
                user
                  ? user.photoURL
                  : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
              }
              alt=""
              className="h-9 w-9 rounded-full object-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
