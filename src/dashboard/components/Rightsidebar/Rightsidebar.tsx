import Profile from './components/Profile';
import YourCard from './components/YourCard';
import Receivers from './components/Receivers';
import RecentActivity from './components/RecentTransactions';

const Rightsidebar = () => {
  return (
    <aside className="shadow-sm d-none d-sm-flex" style={{ overflowY: 'auto', height: '100vh' }}>
      <main>
        <Profile />
        <YourCard />
        <Receivers />
        <RecentActivity />
      </main>
    </aside>
  );
};

export default Rightsidebar;
