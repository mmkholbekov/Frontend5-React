import React from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import { useSelector } from 'react-redux'


const Navbar = () => {
  const count = useSelector(state => state.posts.basket)

  return (
    <nav>
        <ul>
            <li>
                <NavLink to={'/'} className={'link'}>All posts</NavLink>
            </li>
            <li>
                <NavLink to={'/basket'} className={'link'}>Basket</NavLink>
            </li>
        </ul>
        <div>{count.length}</div>
    </nav>
  )
}

export default Navbar