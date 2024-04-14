import React from 'react'

const Profile = () => {
  return (
    <header className="profile-img d-flex justify-content-between p-4">
      <div className="bell-icon d-flex justify-content-center align-items-center">
        <i className="far fa-bell" style={{ fontSize: '24px', color: '#8e9aae' }}></i>
      </div>
      <img
        src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Manar"
        alt="profile-img"
      />
    </header>
  );
}

export default Profile