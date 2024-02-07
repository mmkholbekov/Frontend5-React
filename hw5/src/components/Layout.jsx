import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Outlet />
        <footer>
            <p></p>
        </footer>
    </div>
  )
}

export default Layout
