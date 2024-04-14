import Profile from './components/Profile';
import YourCard from './components/YourCard';
import Receivers from './components/Receivers';
import RecentActivity from './components/RecentActivity';

const Rightsidebar = () => {
  return (
    <aside className="second-sidebar">
      <Profile />
      <main>
        <YourCard />
        <Receivers />
        <RecentActivity />
      </main>
    </aside>
  );
};

export default Rightsidebar;
