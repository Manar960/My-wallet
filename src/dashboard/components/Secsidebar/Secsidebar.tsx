import React from 'react';
import Profile from './components/Profile';
import YourCard from './components/YourCard';
import Receivers from './components/Receivers';
import RecentActivity from './components/RecentActivity';

const Secsidebar = () => {
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

export default Secsidebar;
