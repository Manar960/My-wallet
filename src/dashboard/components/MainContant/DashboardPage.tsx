import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/MainComponants';

const DashboardPage = () => {
  return (
    <div style={{ overflowY: 'auto', height: '100vh' }}>
      <Header />
      <Menu />
      <Main />
    </div>
  );
};

export default DashboardPage;
