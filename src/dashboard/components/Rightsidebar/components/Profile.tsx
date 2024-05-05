import { useAppStore } from '../../../../context/app-store';

const Profile = () => {
  const { username } = useAppStore();

  return (
    <header className="profile-img d-flex justify-content-between p-4">
      <div className="bell-icon d-flex justify-content-center align-items-center">
        <i className="far fa-bell" style={{ fontSize: '24px', color: '#8e9aae' }}></i>
      </div>
      <div className="username text-center ">
        <img
          src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=Manar"
          alt="profile-img"
        />
        <h6>{username}</h6>
      </div>
    </header>
  );
};

export default Profile;
