import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useState} from 'react-redux';

function ProfilePage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
     
    </div>
  );
}

// this allows us to use <App /> in index.js
export default ProfilePage;
