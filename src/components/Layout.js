import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { HamburgerProvider } from '../store/hamburgerContext';

function Layout(props) {
  return (
    <HamburgerProvider>
      <main className="lg:grid grid-cols-5 gap-8 p-6 md:p-8 md:pl-12 md:pr-16 relative">
        <Sidebar className={`lg:block col-span-1`} />
        <div className="col-span-4 col-start-2">
          <Header title={props.title} />
          <div>{props.children}</div>
        </div>
      </main>
    </HamburgerProvider>
  );
}

export default Layout;
