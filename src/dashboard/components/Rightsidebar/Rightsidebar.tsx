import Profile from './components/Profile';
import YourCard from './components/YourCard';
import Receivers from './components/Receivers';
import RecentActivity from './components/RecentTransactions';

const Rightsidebar = () => {
  return (
    <aside className="second-sidebar shadow-sm" style={{ overflowY: 'auto', height: '100vh', }}>
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
