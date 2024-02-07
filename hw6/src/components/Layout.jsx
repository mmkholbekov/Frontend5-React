import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <Outlet />
        <footer>
            <p>2.08.2024</p>
        </footer>
    </div>
  )
}

export default Layout