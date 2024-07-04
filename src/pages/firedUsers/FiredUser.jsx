import React from 'react';

import './FiredUser.css'
const FiredUsersPage = () => {
  const firedUsers = JSON.parse(localStorage.getItem('firedUsers')) || [];

  return (
    <div className='fired-user'>
      <h1 className='fired-title'>Ishdan bo'shatilgan foydalanuvchilar</h1>
      <div className='fired-cards'>
        {firedUsers.map(user => (
          <div className='fired-card' key={user.id}>
            <img className='user-avatar' src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2 className='user-name'>{user.first_name} {user.last_name}</h2>
            <p className='user-email'>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiredUsersPage;
