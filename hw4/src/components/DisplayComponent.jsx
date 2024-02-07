import React from 'react';
import { useSelector } from 'react-redux';

const DisplayComponent = () => {
  const users = useSelector(state => state.user.users)

  return (
    <div className="display-container">
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DisplayComponent;
