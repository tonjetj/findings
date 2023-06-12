import React, { useEffect, useState } from 'react';
import { getAccessToken } from '../api/accessToken';
import { BASE_URL } from '../api/apiBase';
import { useParams } from 'react-router-dom';

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    async function fetchUserProfile() {
      try {
        const accessToken = getAccessToken();
        const response = await fetch(`${BASE_URL}/auction/profiles/${name}`, {
          headers: {
            method: 'GET',
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }

        const userProfile = await response.json();
        setUserData(userProfile);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    }

    fetchUserProfile();
  }, [name]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {userData.name}</h1>
      <p>Email: {userData.email}</p>
      <p>Avatar: {userData.avatar}</p>
      <p>Credits: {userData.credits}</p>
    </div>
  );
}

export default Dashboard;
