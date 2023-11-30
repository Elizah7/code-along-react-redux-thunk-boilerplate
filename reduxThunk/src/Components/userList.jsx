// components/UserList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from './userAction';

const UserList = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  return (
    <div>
      <h2>User List</h2>
      <ul className='user-list'>
        {userData.map((user) => (
          <li key={user.id} className='user-item'>
            <strong>Name:</strong> {user.name} | <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
