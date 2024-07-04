import React, { useEffect, useState } from 'react';
import { getUsers } from '../../api/api';
import UserCard from '../../components/UseCard';

import './HomePage.css';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [firedUsers, setFiredUsers] = useState(() => {
    const saved = localStorage.getItem('firedUsers');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    getUsers()
      .then(data => {
        const newUsers = data.filter(user => !firedUsers.some(fired => fired.id === user.id));
        setUsers(newUsers);
      })
      .catch(error => console.error('Foydalanuvchilarni olishda xato:', error));
  }, [firedUsers]);

  const handleFireUser = (user) => {
    const updatedFiredUsers = [...firedUsers, user];
    setFiredUsers(updatedFiredUsers);
    localStorage.setItem('firedUsers', JSON.stringify(updatedFiredUsers));
    setUsers(users.filter(u => u.id !== user.id));
  };

  return (
    <div className='home-page'>
      <h1 className='home-title'>Ishchilar</h1>
      <div className='home-cards'>
        {users.map(user => (
          <UserCard key={user.id} user={user} onFire={handleFireUser} />
        ))}
      </div>
    </div>
  );
};



export default HomePage;
