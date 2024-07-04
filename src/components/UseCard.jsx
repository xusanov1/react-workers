import React from 'react';
import './UseCard.css'

const UserCard = ({ user, onFire }) => {
  return (
    <div className='card'>
      <img className='user-avatar' src={user.avatar} alt={`${user.first_name}`} />
      <h2 className='user-name'>{user.first_name} {user.last_name}</h2>
      <p className='user-email'>Email: {user.email}</p>
      <button className='remove-btn' onClick={() => onFire(user)}>Ishdan bo'shatish</button>
    </div>
  );
};



export default UserCard;
